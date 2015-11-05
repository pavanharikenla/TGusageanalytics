package com.vz.tg.model;

import java.util.LinkedHashMap;
import java.util.TreeMap;

import org.json.JSONObject;

public class RecomBean {
	private TreeMap<String,String> dataListRecords = new TreeMap<String,String>();
	private JSONObject dataUsageList;
	private LinkedHashMap<String,Float> calldataListRecords = new LinkedHashMap<String,Float>();
	
	public LinkedHashMap<String, Float> getCalldataListRecords() {
		return calldataListRecords;
	}
	public void setCalldataListRecords(LinkedHashMap<String, Float> calldataListRecords) {
		this.calldataListRecords = calldataListRecords;
	}
	private JSONObject calldataUsageList;
	
	
	public JSONObject getCalldataUsageList() {
		return calldataUsageList;
	}
	public void setCalldataUsageList(JSONObject calldataUsageList) {
		this.calldataUsageList = calldataUsageList;
	}
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
