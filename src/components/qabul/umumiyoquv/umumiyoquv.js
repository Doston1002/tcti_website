import {  useContext } from 'react';
import { Context as LanguageContext } from '../../../Context/Language';
import context from '../../../lang/lang';
import './umumiyoquv.css';

function Umumiy() {
    const { lang } = useContext(LanguageContext);

    return (
        <>
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-lg-12 col-md-12 bakalavr-container">
                                <h1 className='text-center'>{context[lang].Bakalavr.b1}</h1>
                            <div className='about-bakalavr'>
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{context[lang].Bakalavr.b2}</p>
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{context[lang].Bakalavr.b3}</p>
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{context[lang].Bakalavr.b4}</p>
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{context[lang].Bakalavr.b5}</p>
                            </div>

                            <table className='bakalavr-table'>
                                    <tbody>
                                    <tr> <td>1</td> <td>5111019</td> <td>{context[lang].Bakalavr.b6}</td> </tr>
                                    <tr> <td>1.1.</td> <td>5111019</td> <td>{context[lang].Bakalavr.b7}</td> </tr>
                                    <tr> <td>1.2.</td> <td>5111030</td> <td>{context[lang].Bakalavr.b8}</td> </tr>
                                    <tr> <td>2.</td> <td>5230200</td> <td>{context[lang].Bakalavr.b9}</td> </tr>
                                    <tr> <td>3.</td> <td>5320300</td> <td>{context[lang].Bakalavr.b10}</td> </tr>
                                    <tr> <td>3.1.</td> <td>5320300</td> <td>{context[lang].Bakalavr.b11}</td> </tr>
                                    <tr> <td>3.2.</td> <td>5320300</td> <td>{context[lang].Bakalavr.b12}</td> </tr>
                                    <tr> <td>3.3.</td> <td>5320300</td> <td>{context[lang].Bakalavr.b13}</td> </tr>
                                    <tr> <td>3.4.</td> <td>5320300</td> <td>{context[lang].Bakalavr.b14}</td> </tr>
                                    <tr> <td>3.4.</td> <td>5320300</td> <td>{context[lang].Bakalavr.b14}</td> </tr>
                                    <tr> <td>4.</td> <td>5311000</td> <td>{context[lang].Bakalavr.b15}</td> </tr>
                                    <tr> <td>5.</td> <td>5320400</td> <td>{context[lang].Bakalavr.b16}</td> </tr>
                                    <tr> <td>5.1.</td> <td>5320400</td> <td>{context[lang].Bakalavr.b17}</td> </tr>
                                    <tr> <td>5.2.</td> <td>5320400</td> <td>{context[lang].Bakalavr.b18}</td> </tr>
                                    <tr> <td>5.3.</td> <td>5320400</td> <td>{context[lang].Bakalavr.b19}</td> </tr>
                                    <tr> <td>5.4.</td> <td>5320400</td> <td>{context[lang].Bakalavr.b20}</td> </tr>
                                    <tr> <td>5.5.</td> <td>5320400</td> <td>{context[lang].Bakalavr.b21}</td> </tr>
                                    <tr> <td>5.6.</td> <td>5320400</td> <td>{context[lang].Bakalavr.b22}</td> </tr>
                                    <tr> <td>6.</td> <td>5321300</td> <td>{context[lang].Bakalavr.b23}</td> </tr>
                                    <tr> <td>7.</td> <td>5320500</td> <td>{context[lang].Bakalavr.b24}</td> </tr>
                                    <tr> <td>8.</td> <td>5310900</td> <td>{context[lang].Bakalavr.b25}</td> </tr>
                                    <tr> <td>9.</td> <td>5321000</td> <td>{context[lang].Bakalavr.b26}</td> </tr>
                                    <tr> <td>9.1.</td> <td>5321000</td> <td>{context[lang].Bakalavr.b27}</td> </tr>
                                    <tr> <td>9.2.</td> <td>5321000</td> <td>{context[lang].Bakalavr.b28}</td> </tr>
                                    <tr> <td>10.</td> <td>5640100</td> <td>{context[lang].Bakalavr.b29}</td> </tr>
                                    <tr> <td>11.</td> <td>5630100</td> <td>{context[lang].Bakalavr.b30}</td> </tr>
                                    </tbody>
                            </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Umumiy;
