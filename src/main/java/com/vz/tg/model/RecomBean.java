package com.vz.tg.model;

import java.util.TreeMap;

import org.json.JSONObject;

public class RecomBean {
	private TreeMap<String,String> dataListRecords = new TreeMap<String,String>();
	private JSONObject dataUsageList;
	private Integer selPlan;
	
	public Integer getSelPlan() {
		return selPlan;
	}
	public void setSelPlan(Integer selPlan) {
		this.selPlan = selPlan;
	}
	public TreeMap<String, String> getDataListRecords() {
		return dataListRecords;
	}
	public void setDataListRecords(TreeMap<String, String> dataListRecords) {
		this.dataListRecords = dataListRecords;
	}
	public JSONObject getDataUsageList() {
		return dataUsageList;
	}
	public void setDataUsageList(JSONObject dataUsageList) {
		this.dataUsageList = dataUsageList;
	}	
}
