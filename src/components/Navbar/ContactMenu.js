import React, { Component } from 'react'
import { Icon, Menu ,Grid } from 'semantic-ui-react'



  const ContactMenu = (props) => (
      <Menu icon className='ContactMenu'  widths={4}    alignItems="center"    >

      <Menu.Item 
         style={styles.item}
          name='github'
          onClick={()=>{window.open('https://github.com/sharonNissanov')}}
        > <Icon name='github' size='big' style={styles.icon} />
          
        </Menu.Item>

    
        <Menu.Item  
          name='linkedin'
          style={styles.item}
          onClick={() => {window.open('https://www.linkedin.com/in/sharon-nissanov/')}}
        > <Icon name='linkedin square' size='big' style={styles.icon}/>
        </Menu.Item>

        <Menu.Item
          name='mail'
          style={styles.item}
          onClick={()=>{
          props.chosen_language ==="English" ? 
          window.open("mailto:sharon.nissanov@gmail.com?subject=Resume Sharon Nissanov&body=Hi Sharon, I would like to contact you regarding your resume.")
          :
          window.open("mailto:sharon.nissanov@gmail.com?subject=קורות-חיים: שרון ניסנוב&body=היי שרון, אשמח ליצור איתך קשר בנוגע לקורות החיים שלך.")}}
        >
          <Icon name='mail' size='big' style={styles.icon} />
          
        </Menu.Item>



        <Menu.Item
          name='call'
          style={styles.item}
          onClick={()=>{window.open("tel:+972525496864")}}
        >
          <Icon name='call square' size='big' style={styles.icon} />
        </Menu.Item>

      </Menu>

    )


export default  ContactMenu
const styles = {
  item:{
    backgroundColor: "#cdc9c3"
  },
  icon:{
    color:"#7d5a5a",
    cursor:"pointer",
  }
}