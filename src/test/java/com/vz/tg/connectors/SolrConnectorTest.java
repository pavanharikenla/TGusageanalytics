package com.vz.tg.connectors;

import org.testng.annotations.Test;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.AfterTest;

public class SolrConnectorTest {
  @BeforeTest
  public void beforeTest() {
  }

  @AfterTest
  public void afterTest() {
  }


  @Test
  public void getConnection() {
	  SolrConnector.getConnection();
  }
}
