package com.vz.tg;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;

import org.apache.solr.client.solrj.SolrQuery;
import org.apache.solr.client.solrj.response.FacetField;
import org.apache.solr.client.solrj.response.FacetField.Count;
import org.apache.solr.client.solrj.response.QueryResponse;
import org.json.JSONObject;

import com.vz.tg.services.HomeService;
import com.vz.tg.services.Impl.HomeServiceImpl;

public class HourlyThread extends Thread {
	public static HashMap<String,Collection<JSONObject>> hourlyListMap= new HashMap<String,Collection<JSONObject>>();
	public static HashMap<String,ConcurrentHashMap<String,Long>> mapByHourly = new HashMap<String,ConcurrentHashMap<String,Long>>();
	private static String mobNumber;
	//private static String dateValue;
	private static HashMap<String,String> timerMap= new HashMap<String,String>();
	public HourlyThread(String mobile){
		this.mobNumber = mobile;
		//this.dateValue = dateVal;
		timerMap.put("00", "12AM");
		timerMap.put("01", "01AM");
		timerMap.put("02", "02AM");
		timerMap.put("03", "03AM");
		timerMap.put("04", "04AM");
		timerMap.put("05", "05AM");
		timerMap.put("06", "06AM");
		timerMap.put("07", "07AM");
		timerMap.put("08", "08AM");
		timerMap.put("09", "09AM");
		timerMap.put("10", "10AM");
		timerMap.put("11", "11AM");
		timerMap.put("12", "12PM");
		
		timerMap.put("13", "01PM");
		timerMap.put("14", "02PM");
		timerMap.put("15", "03PM");
		timerMap.put("16", "04PM");
		timerMap.put("17", "05PM");
		timerMap.put("18", "06PM");
		timerMap.put("19", "07PM");
		timerMap.put("20", "08PM");
		timerMap.put("21", "09PM");
		timerMap.put("22", "10PM");
		timerMap.put("23", "11PM");
	}
	
	public void run() {
		
		String mobNumber = this.mobNumber;
		SimpleDateFormat sdf = new SimpleDateFormat("MM-dd-yyyy");
		SimpleDateFormat solrFormat = new SimpleDateFormat("yyyy-MM-dd");
		int pastDays = 7;
		while (pastDays > 0) {
			try {
				Calendar cal = Calendar.getInstance();
				cal.add(Calendar.DATE, -pastDays);
				Date todate1 = cal.getTime();
				String fromdate = solrFormat.format(todate1);

				if (fromdate != null && !"".equalsIgnoreCase(fromdate)) {
					String[] dayHours = { "00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12",
							"13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23" };
					Collection<JSONObject> hourlyList = new ArrayList<JSONObject>();
					for (int i = 0; i <= dayHours.length - 1; i++) {

						SolrQuery query = new SolrQuery("mobile:" + mobNumber + " AND data_usage_end_time:[" + fromdate
								+ "T" + dayHours[i] + ":00:00Z TO " + fromdate + "T" + dayHours[i]
								+ ":59:59Z] AND dataUsed:[1 TO *]");
						query.setRows(0);
						query.addFacetField("dataUsed");
						HomeService homeservice = new HomeServiceImpl();
						QueryResponse response = homeservice.getServiceResponse(query);
						if (response != null) {
							FacetField dataUsedFacetList = response.getFacetField("dataUsed");
							List<Count> dataValues = dataUsedFacetList.getValues();
							float dataTotal = 0;
							for (Count dataEntry : dataValues) {
								if (dataEntry.getCount() != 0) {
									dataTotal = dataTotal
											+ Float.parseFloat(dataEntry.getName()) * dataEntry.getCount();
								} else {
									break;
								}
							}

							// String userFormatDate =
							// newFormat.format(todate1);

							JSONObject timeObject = new JSONObject();

							timeObject.put("time", timerMap.get(dayHours[i]));
							timeObject.put("bytes", dataTotal * 1024);
							hourlyList.add(timeObject);
							if(mapByHourly.containsKey(timerMap.get(dayHours[i]))){
								ConcurrentHashMap<String, Long> keyMap = mapByHourly.get(timerMap.get(dayHours[i]));
								Date simpleDate = solrFormat.parse(fromdate);
								String finalDateCC = sdf.format(simpleDate);
								keyMap.put(finalDateCC, (long)dataTotal * 1024);
								mapByHourly.put(timerMap.get(dayHours[i]), keyMap);
							}else{
								ConcurrentHashMap<String, Long> keyMap = new ConcurrentHashMap<String, Long>();
								Date simpleDate = solrFormat.parse(fromdate);
								String finalDateCC = sdf.format(simpleDate);
								keyMap.put(finalDateCC, (long)dataTotal * 1024);
								mapByHourly.put(timerMap.get(dayHours[i]), keyMap);
							}
							
						}
						// dataListObj.put(userFormatDate,
						// (long)dataTotal*1024);

					}
					hourlyListMap.put(fromdate, hourlyList);
					pastDays = pastDays - 1;
				}
				
			} catch (Exception e) {
				e.printStackTrace();
			}
			//
		}
	}
}
