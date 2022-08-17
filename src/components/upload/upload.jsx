import { useRef, useState } from "react";


function Upload_COMPONENT() {
    const imgRef = useRef()
    const vidRef = useRef()
    const fileRef = useRef()

    const [file, setFile] = useState()
    return (
        <>
            <div className="d-flex upload_wrapper">
                <div className="m-5">
                    <form enctype="multipart/form-data">
                        <div className="download">
                            <p>Fayl yuklash</p>
                        </div>

                        <div className="files">`
                            <a >
                                Fayllar
                            </a>
                        </div>

                        <input type="file" className="file_input_download" ref={fileRef} />

                        <div className="max_size">
                            <p>Max:100mb</p>
                        </div>

                        <div className="upload_button_2">

                        </div>

                        <div className="upload_button_3">
                            <button className="upload_button_file" onClick={(e) => {
                                e.preventDefault()
                                const formData = new FormData()
                                formData.append('name', fileRef.current.files[0])
                                var requestOptions = {
                                    method: 'POST',
                                    headers: {
                                        "Access-Control-Allow-Origin": "*"
                                    },
                                    body: formData,
                                    redirect: 'follow'
                                };
                                fetch("http://tcti.uz/api/upload/add", requestOptions)
                                    .then(response => response.json())
                                    .then(result => {
                                        console.log(result);
                                        alert("Muvafaqiyatli saqlandi!")
                                    })
                                    .catch(error => console.log('error', error));
                            }}>
                                <a >
                                    Yuklash
                                </a>
                            </button>

                            <div>

                            </div>
                        </div>
                    </form>
                </div>
                <div className="m-5">


                </div>
                <div className="m-5">

                </div>


            </div>


            {/* <div className="loader">
    <img src="/img/loader.svg" alt=""/>
</div> */}
        </>
    );
}

export default Upload_COMPONENT;
