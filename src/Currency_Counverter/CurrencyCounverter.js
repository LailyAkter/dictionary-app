import { Container } from '@mui/material';
import React, { useEffect } from 'react'
import css from './CurrencyCounverter.module.css';

const BASE_URL = "https://api.exchangeratesapi.io/v1/latest?access_key=JS4xeqidezJkeXu2qewqsf9D1EPTiahm";
const CONVERT_URL = "https://api.exchangeratesapi.io/v1/convert?access_key=JS4xeqidezJkeXu2qewqsf9D1EPTiahm";

export default function CurrencyCounverter() {
    

    useEffect(()=>{
        fetch(BASE_URL)
        .then(res=>res.json())
        .then((data)=>{
            const firstCurrency = Object.keys(data.rates)[0];
            console.log(firstCurrency)
        })
    },[]);

  return (
    <>
        <Container>
            <div className={css.counter_comtainer}>
                <div className={css.text_box}>
                    <div className={css.inputarea}>
                        <div className={css.navbar_container}>
                            <h2>CURRENCY CONVERTER</h2>
                        </div>

                        <div className={css.from}>
                            <input type='number' placeholder='enter amount' value="4509" />
                            <select>
                                <option >fdasdfsaf</option>
                            </select>
                        </div>

                        <h1>=</h1>

                        <div className={css.to}>
                            <input type='number' placeholder='enter amount' value="5656"  />
                            <select value="6546">
                                <option>dgfdg</option>
                            </select>
                        </div>

                    </div>
                </div>
            </div>
        </Container>
    </>
  )
}
