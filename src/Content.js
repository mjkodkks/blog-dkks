import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './myBody.css';
import './mySidebar.css';
import {
  Button,
  Checkbox,
  Form,
  Grid,
  Image,
  Input,
  Radio,
  Segment,
  Dropdown,
  Divider
} from 'semantic-ui-react'
import './semantic-ui/dist/semantic.min.css';
import './Content.css';
import saveOnClick from './database';
import * as firebase from 'firebase';

class Content extends React.Component {
  render() {
    return (
      <div>
        <Content1></Content1>
        <Content2></Content2>
      </div>
    );
  }
}

class Content1 extends React.Component {
  render() {
    return (
      <div className="main" id="main">
        <div className="headertext">DKKs Blog.ME</div>
        <Divider section/>
        <div className="bodytext">
          <p>ซาร์ปัจเจกชนคอมเมนต์วอลล์ แชมเปญเอ๋อ สป็อตรูบิก โฟล์ควิก เวสต์ อพาร์ทเมนต์โอเลี้ยง นอร์ท โปรเจคท์ คีตราชันฮอตดอก โครนากรุ๊ปเซ็นเตอร์วานิลา สเปค มอบตัวฟรุตมวลชน แจ็กพอตโหลยโท่ยดีไซน์เนอร์สเปกพริตตี้ โบ้ย มายองเนสนิวเที่ยงวันพรีเมียร์ แบรนด์บุ๋นเยอร์บีร่าเวสต์</p>
          <p>แทกติค สโตนเคส บูติคเซ็นเตอร์ฮิปโปควิกสกาย แคร์คอนโดสไตรค์เซอร์แมนชั่น อุปนายกมายาคติ ซิ่งโบว์ลิ่งดิกชันนารีมายาคติแคนู สเปกนิวส์เพทนาการอัลมอนด์ พูลโซนี่ออร์แกนิคแมกกาซีนรูบิก โปรเจกต์พุทธศตวรรษไลฟ์ เฝอม้านั่ง ไมค์ ก่อนหน้าปักขคณนาคาปูชิโนแซว ไทยแลนด์โซลาร์โหงวไลฟ์สามช่า ฟอยล์บ๋อย ออทิสติกแฮปปี้ภควัทคีตาเปปเปอร์มินต์ เดชานุภาพติงต๊อง</p>
          <p>ภคันทลาพาธแคนู ธุหร่ำ อ่อนด้อยอุด้งเอ็นทรานซ์ แพนด้าฟรุตบาร์บีคิวคอนโด แหววซานตาคลอส มาร์ตห่วยเจล มินท์แต๋วฮิปโปคาร์โก้ ตี๋มลภาวะรากหญ้า เคลื่อนย้ายอมาตยาธิปไตย โกเต็กซ์ รามาธิบดีทีวียูโร เหมยอุเทนอุปสงค์ธรรมาภิบาลเคลื่อนย้าย ไฮบริดวิลล์ช็อปแฟ็กซ์ ฮีโร่น็อกยนตรกรรมวิลล์มาร์เก็ตติ้ง วัจนะดีลเลอร์เบนโล ไลฟ์เอาต์</p>
          <p>โปรเจกเตอร์สามช่าบัตเตอร์เฟิร์มตี๋ อิมพีเรียลสารขัณฑ์เพียวซาดิสต์ โทรยอมรับซีอีโอมาม่า แทงโก้คอนโทรล เทรนด์ธัมโมเหี่ยวย่น คาราโอเกะธรรมาเทวาธิราชเบิร์ดแคมปัส ฟรุตเอเซียช็อปเปอร์แอลมอนด์ความหมาย แมชีนบ๋อยลาตินเซลส์ไฮไลต์ วัจนะสปายมาร์ตปูอัดอัลมอนด์ เวเฟอร์ อุปนายิกาแรงดูดเซฟตี้บุ๋น รีทัชชนะเลิศ อึมครึม แอปพริคอทชนะเลิศ ยาวีคอร์รัปชันเชฟเมจิก ซีนวิลล์วิทย์โหงวเฮ้ง</p>
        </div>
      </div>
    );
  }
}

class Content2 extends React.Component {

  render() {
    return (
      <div className="main" id="main">
        <div className="headertext">Play Ground</div>
        <Divider section/>
        <div className="bodytext">
          <p>ทดสอบการบันทึกฐานข้อมูล</p>

          <Segment inverted>
            <Form inverted>
              <Form.Group widths='equal'>
                <Form.Input label='First name' placeholder='First name'id="name" />
                <Form.Input label='Last name' placeholder='Last name'id="surname" />
                <Form.Input label='Email' placeholder='Email' id="email" />
              </Form.Group>
              <Form.Checkbox label='I agree to the Terms and Conditions'/>
              <Button type='submit' id="submitt" onClick={saveOnClick()}>Submit</Button>
              <Button type='delete'id="del">Delete</Button>
              <Button type='update' id="updatee">Update</Button>
            </Form>
          </Segment>

        </div>
      </div>
    );
  }
}


export default Content;
