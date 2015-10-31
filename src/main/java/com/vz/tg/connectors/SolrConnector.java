package com.vz.tg.connectors;

import org.apache.solr.client.solrj.SolrClient;
import org.apache.solr.client.solrj.impl.HttpSolrClient;


public class SolrConnector {
	public static SolrClient getConnection(){
		String url = "http://ec2-52-32-54-95.us-west-2.compute.amazonaws.com:8983/solr/collection1";
		SolrClient solr = new HttpSolrClient(url);
		return solr;
	}
}
