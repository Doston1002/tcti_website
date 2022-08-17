import { useRef, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Editor } from '@tinymce/tinymce-react';


function AnnouncementsEditAdmin() {
    const news_title_uz = useRef()
    const news_title_ru = useRef()
    const news_title_en = useRef()
    const news_body_uz = useRef()
    const news_body_ru = useRef()
    const news_body_en = useRef()
    const news_img = useRef()
    const { id } = useParams()
    const [announcements, setAnnouncements] = useState([])
    useEffect(() => {
        fetch(`http://tcti.uz/api/announcements/one/${id}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setAnnouncements(data)
            });
    }, [])
    console.log(announcements);
    return (
        <>
            <div className="content">
                <div className="container-fluid">
                    <div className="page-title-box">
                        <div className="row align-items-center">
                            <div className="col-sm-6">
                                <h4>Form Elements</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="mb-2 header-title">E'lon ni Tahrirlash</h4>
                                    {announcements.map(item => (
                                        <form autoComplete="off" className="mt-2" onSubmit={(e) => {
                                            e.preventDefault()
                                            fetch(`http://tcti.uz/api/announcements/edit`, {
                                                method: 'POST',
                                                headers: {
                                                    'Accept': 'application/json',
                                                    'Content-Type': 'application/json'
                                                },
                                                body: JSON.stringify(
                                                    {
                                                        img: news_img.current.value,
                                                        title_uz: news_title_uz.current.value,
                                                        body_uz: news_body_uz.current.getContent(),
                                                        title_ru: news_title_ru.current.value,
                                                        body_ru: news_body_ru.current.getContent(),
                                                        title_en: news_title_en.current.value,
                                                        body_en: news_body_en.current.getContent(),
                                                        id: item.id
                                                    }
                                                )
                                            }).then(function (res) { return res.json(); })
                                                .then(function (data) { console.log(data); })
                                            window.location = '/admin/announcement'
                                        }}>
                                            <div className="form-group row">
                                                <label for="example-text-input" className="col-sm-2 col-form-label">Xabar nomi o'zbek
                                                    tilida</label>
                                                <div className="col-sm-10">
                                                    <input ref={news_title_uz} className="form-control input_news_edit_name_uz"
                                                        type="text" name="name" defaultValue={item.title_uz} />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label for="example-text-input" className="col-sm-2 col-form-label">Xabar nomi rus
                                                    tilida</label>
                                                <div className="col-sm-10">
                                                    <input ref={news_title_ru} className="form-control input_news_edit_name_ru" defaultValue={item.title_ru}
                                                        type="text" name="name" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label for="example-text-input" className="col-sm-2 col-form-label">Xabar nomi ingliz
                                                    tilida</label>
                                                <div className="col-sm-10">
                                                    <input ref={news_title_en} className="form-control input_news_edit_name_en" defaultValue={item.title_en}
                                                        type="text" name="name" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label for="example-text-input" className="col-sm-2 col-form-label">To'liq matni o'zbek
                                                    tilida</label>
                                                <div className="col-sm-10">
                                                    <Editor
                                                        onInit={(evt, editor) => news_body_uz.current = editor}
                                                        initialValue={item.body_uz}
                                                        init={{
                                                            height: 500,
                                                            menubar: false,
                                                            plugins: [
                                                                'advlist autolink lists link image charmap print preview anchor',
                                                                'searchreplace visualblocks code fullscreen',
                                                                'insertdatetime media table paste code help wordcount image'
                                                            ],
                                                            toolbar: 'undo redo | formatselect | ' +
                                                                'bold italic backcolor | alignleft aligncenter ' +
                                                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                                                'removeformat | help | image | media | link | code',
                                                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label for="example-text-input" className="col-sm-2 col-form-label">To'liq matni rus
                                                    tilida</label>
                                                <div className="col-sm-10">
                                                    <Editor
                                                        onInit={(evt, editor) => news_body_ru.current = editor}
                                                        initialValue={item.body_uz}
                                                        init={{
                                                            height: 500,
                                                            menubar: false,
                                                            plugins: [
                                                                'advlist autolink lists link image charmap print preview anchor',
                                                                'searchreplace visualblocks code fullscreen',
                                                                'insertdatetime media table paste code help wordcount image'
                                                            ],
                                                            toolbar: 'undo redo | formatselect | ' +
                                                                'bold italic backcolor | alignleft aligncenter ' +
                                                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                                                'removeformat | help | image | media | link | code',
                                                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label for="example-text-input" className="col-sm-2 col-form-label">To'liq matni ingliz
                                                    tilida</label>
                                                <div className="col-sm-10">
                                                    <Editor
                                                        onInit={(evt, editor) => news_body_en.current = editor}
                                                        initialValue={item.body_uz}
                                                        init={{
                                                            height: 500,
                                                            menubar: false,
                                                            plugins: [
                                                                'advlist autolink lists link image charmap print preview anchor',
                                                                'searchreplace visualblocks code fullscreen',
                                                                'insertdatetime media table paste code help wordcount image'
                                                            ],
                                                            toolbar: 'undo redo | formatselect | ' +
                                                                'bold italic backcolor | alignleft aligncenter ' +
                                                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                                                'removeformat | help | image | media | link | code',
                                                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                                        }}
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label for="example-text-input" className="col-sm-2 col-form-label">Xabar surati</label>
                                                <div className="col-sm-10">
                                                    <img src={item.img} className="sizeArticleImage" alt="error" />
                                                    <input ref={news_img} className="form-control Input_news_edit_image" defaultValue={item.img}
                                                        type="text" name="image" />
                                                </div>
                                            </div>
                                            <div>
                                                <a href="/admin/announcement" className="btn btn-dark btn-sm float-right ml-3"
                                                >Orqaga</a>
                                                <button data-uuid="<%- data._id %>" type="submit"
                                                    className="button_sumbit_edit btn btn-success btn-sm float-right ml-3">Saqlash</button>
                                            </div>
                                        </form>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AnnouncementsEditAdmin;
