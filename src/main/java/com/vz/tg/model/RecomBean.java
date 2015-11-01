package com.vz.tg.model;

import java.util.TreeMap;

import org.json.JSONObject;

public class RecomBean {
	private TreeMap<String,String> dataListRecords = new TreeMap<String,String>();
	private JSONObject dataUsageList;
	private TreeMap<String,String> calldataListRecords = new TreeMap<String,String>();
	private JSONObject calldataUsageList;
	public TreeMap<String, String> getCalldataListRecords() {
		return calldataListRecords;
	}
	public void setCalldataListRecords(TreeMap<String, String> calldataListRecords) {
		this.calldataListRecords = calldataListRecords;
	}
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
