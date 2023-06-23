import React from 'react'
import logo from './../images/AbhiPayLogo.png'
import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';
import { useState } from 'react';

const Invoice = () => {
    const reduxstate = JSON.parse(localStorage.getItem("paymentdetails"));
    const [detail,setDetail]=useState(reduxstate.upiid)
    let totalprice = 0
    const data = [
        { sno: "1", name: reduxstate.itemInfo.name, price: reduxstate.itemInfo.price, quantity: 1 }

    ];
    const generateRandomString = (length) => {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
      
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * charactersLength);
          result += characters.charAt(randomIndex);
        }
      
        return result;
      };
      let upi = ()=>{
        if(detail===null){
            return reduxstate.carddetails
        }
        else{
            return reduxstate.upiid
        }}
    const date=new Date().toISOString().slice(0, 10);
    const paymentDetailsUPI = [
        { upiid: upi(), date: date, bankref: generateRandomString(25) }
    ];

    return (

        <Document>
            <Page size='A3' orientation='landscape' style={styles.body}>
                <View style={styles.title}>
                    <Image style={styles.image} src={logo} />
                    <Text>Invoice</Text>
                </View>
                <View style={styles.address}>
                    <Text style={{ fontSize: 20 }}>AbhiPay</Text>
                    <Text>12 B, XYZ Colony,</Text>
                    <Text>Gorakhpur,UP,</Text>
                    <Text>273209.</Text>
                </View>
                <View style={styles.line}>
                </View>
                <View style={styles.itemlistHeading}>
                    <Text>Purchased Items</Text>
                </View>
                <View style={styles.table}>
                    {/* Table header */}
                    <View style={[styles.row, {
                        fontWeight: 'bold', backgroundColor: "#6e05a4",
                        color: "white",
                    }]}>
                        <Text style={styles.cell}>S.No</Text>
                        <Text style={styles.cell}>Item Name</Text>
                        <Text style={styles.cell}>Price</Text>
                        <Text style={styles.cell}>Quantity</Text>
                    </View>
                    {/* Table body */}
                    {data.map((item, index) => (
                        <View key={index} style={styles.row}>
                            <Text style={[styles.cell, { backgroundColor: "#d8d8d8" }]}>{item.sno}</Text>
                            <Text style={[styles.cell, { backgroundColor: "#b9b9b9" }]}>{item.name}</Text>
                            <Text style={[styles.cell, { backgroundColor: "#d8d8d8" }]}>{item.price}</Text>
                            <Text style={[styles.cell, { backgroundColor: "#b9b9b9" }]}>{item.quantity}</Text>
                        </View>
                    ))}
                </View>
                <View style={styles.totaleval}>
                    <Text>Total = {data.map((item, index) => {
                        if (index < data.length - 1) {
                            totalprice += (item.price * item.quantity);
                            return (
                                `${`${item.price} * ${item.quantity}` }+`
                            )
                        }
                        else {
                            totalprice += (item.price * item.quantity);
                            return (
                                `${`${item.price} * ${item.quantity}` }`
                            )
                        }
                    })} = {totalprice}</Text>
                </View>
                <View style={styles.itemlistHeading}>
                    <Text>Payment Details</Text>
                </View>
                <View style={styles.table}>
                    {/* Table header */}
                    <View style={[styles.row, {
                        fontWeight: 'bold', backgroundColor: "#6e05a4",
                        color: "white",
                    }]}>
                        <Text style={styles.cell}>{`${(detail !== null)?"UPI ID":"Card Number"}`}</Text>
                        <Text style={styles.cell}>Amount</Text>
                        <Text style={styles.cell}>Date</Text>
                        <Text style={styles.cell}>Bank reference ID</Text>
                    </View>
                    {/* Table body */}
                    {paymentDetailsUPI.map((item, index) => (
                        <View key={index} style={styles.row}>
                            <Text style={[styles.cell, { backgroundColor: "#b9b9b9" }]}>{item.upiid}</Text>
                            <Text style={[styles.cell, { backgroundColor: "#d8d8d8" }]}>{totalprice}</Text>
                            <Text style={[styles.cell, { backgroundColor: "#b9b9b9" }]}>{item.date}</Text>
                            <Text style={[styles.cell, { backgroundColor: "#d8d8d8" }]}>{item.bankref}</Text>
                        </View>
                    ))}
                </View>
            </Page>
        </Document>
    )
};

Font.register({
    family: 'Oswald',
    src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});

const styles = StyleSheet.create({
    body: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        fontFamily: 'Oswald',
        backgroundColor: "#6e05a4",
        padding: "10px",
        color:"white"
    },
    author: {
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 40,
    },
    address: {
        marginTop: "30px",
        fontFamily: 'Oswald'
    },
    line: {
        border: "1px solid dark-gray",
        marginTop: 10,
    },
    itemlistHeading: {
        fontFamily: 'Oswald',
        marginTop: 20,
    },
    table: {
        display: 'table',
        width: '100%',
        marginBottom: 10,
        marginTop: 10,
        fontFamily: 'Oswald',
        borderRadius: 10
    },
    row: {
        flexDirection: 'row',
    },
    cell: {
        width: '100%',
        padding: 5,
        textAlign: 'center',
    },
    image: {
        height: "50px",
        width: "100px"
    },
    totaleval: {
        display: "flex",
        marginLeft: "auto",
        fontFamily: 'Oswald',
    }

});

export default Invoice
