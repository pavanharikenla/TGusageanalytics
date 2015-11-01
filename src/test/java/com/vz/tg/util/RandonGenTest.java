package com.vz.tg.util;

import org.testng.annotations.Test;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.AfterTest;

public class RandonGenTest {
	RandonGen rg = null;
  @BeforeTest
  public void beforeTest() {
	  rg = new RandonGen();
  }

  @AfterTest
  public void afterTest() {
	  rg = null;
  }


  @Test
  public void duration() {
    rg.duration();
  }

  @Test
  public void getElpasedTime() {
    rg.getElpasedTime();
  }

  @Test
  public void getEmail() {
    rg.getEmail();
  }

  @Test
  public void getMobileNum() {
    rg.getMobileNum();
  }
}
