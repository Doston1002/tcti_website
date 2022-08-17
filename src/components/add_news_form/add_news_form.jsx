import { useRef, useState } from 'react'
import { Editor } from '@tinymce/tinymce-react';
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
// import CKEditor from "@ckeditor/ckeditor5-react"
// import parse from "html-react-parser"

function AddNewsForm() {
    const news_title_uz = useRef()
    const news_title_ru = useRef()
    const news_title_en = useRef()
    const news_body_uz = useRef()
    const news_body_ru = useRef()
    const news_body_en = useRef()
    const news_img = useRef()
    const news_date = useRef()
    return (
        <>
            <div className="content news_form">
                <div className="container-fluid">
                    <div className="page-title-box">
                        <div className="row align-items-center">
                            <div className="col-sm-6">
                                <h4>Yangi xabar qo'shish</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="mt-0 header-title">Yangi Xabar qo'shish</h4>
                                    <form onSubmit={(e) => {
                                        e.preventDefault()
                                        fetch('http://tcti.uz/api/news/add', {
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
                                                    date: news_date.current.value,
                                                }
                                            )
                                        }).then(function (res) { return res.json(); })
                                            .then(function (data) { console.log(data); })
                                        window.location = '/admin/yangilik'
                                    }}>
                                        <div className="form-group row">
                                            <label for="example-text-input" className="col-sm-2 col-form-label">Xabar nomi o'zbek tilida</label>
                                            <div className="col-sm-10">
                                                <input ref={news_title_uz} className="form-control input_news_name_uz" type="text" name="title_uz" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-text-input" className="col-sm-2 col-form-label">Xabar nomi rus tilida</label>
                                            <div className="col-sm-10">
                                                <input ref={news_title_ru} className="form-control input_news_name_ru" type="text" name="title_ru" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-text-input" className="col-sm-2 col-form-label">Xabar nomi ingliz tilida</label>
                                            <div className="col-sm-10">
                                                <input ref={news_title_en} className="form-control input_news_name_en" type="text" name="title_en" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-text-input" className="col-sm-2 col-form-label">To'liq matni o'zbek tilida</label>
                                            <div className="col-sm-10">
                                                <Editor
                                                    onInit={(evt, editor) => news_body_uz.current = editor}
                                                    initialValue={``}
                                                    init={{
                                                        height: 500,
                                                        menubar: false,
                                                        plugins: [
                                                            'advlist autolink lists link image charmap print preview anchor',
                                                            'searchreplace visualblocks code fullscreen',
                                                            'insertdatetime media table paste code help wordcount image code'
                                                        ],
                                                        toolbar: 'undo redo | formatselect | ' +
                                                            'bold italic backcolor | alignleft aligncenter ' +
                                                            'alignright alignjustify | bullist numlist outdent indent | ' +
                                                            'removeformat | help | image | media | link | code | code',
                                                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-text-input" className="col-sm-2 col-form-label">To'liq matni rus tilida</label>
                                            <div className="col-sm-10">
                                                <Editor
                                                    onInit={(evt, editor) => news_body_ru.current = editor}
                                                    initialValue={``}
                                                    init={{
                                                        height: 500,
                                                        menubar: false,
                                                        plugins: [
                                                            'advlist autolink lists link image charmap print preview anchor',
                                                            'searchreplace visualblocks code fullscreen',
                                                            'insertdatetime media table paste code help wordcount image | link | code | code'
                                                        ],
                                                        toolbar: 'undo redo | formatselect | ' +
                                                            'bold italic backcolor | alignleft aligncenter ' +
                                                            'alignright alignjustify | bullist numlist outdent indent | ' +
                                                            'removeformat | help | image | media | link | code | code',
                                                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-text-input" className="col-sm-2 col-form-label">To'liq matni ingliz tilida</label>
                                            <div className="col-sm-10">
                                                <Editor
                                                    onInit={(evt, editor) => news_body_en.current = editor}
                                                    initialValue={``}
                                                    init={{
                                                        height: 500,
                                                        menubar: false,
                                                        plugins: [
                                                            'advlist autolink lists link image charmap print preview anchor',
                                                            'searchreplace visualblocks code fullscreen',
                                                            'insertdatetime media table paste code help wordcount image | code'
                                                        ],
                                                        toolbar: 'undo redo | formatselect | ' +
                                                            'bold italic backcolor | alignleft aligncenter ' +
                                                            'alignright alignjustify | bullist numlist outdent indent | ' +
                                                            'removeformat | help | image | media | link | code | code',
                                                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-text-input" className="col-sm-2 col-form-label">Xabar surati</label>
                                            <div className="col-sm-10">
                                                <input ref={news_img} className="form-control Input_news_image" type="text" name="img" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-text-input" className="col-sm-2 col-form-label">Sana ni kiriting</label>
                                            <div className="col-sm-10">
                                                <input ref={news_date} className="form-control Input_news_date" type="text" name="img" />
                                            </div>
                                        </div>
                                        <a href="/api/news/all" className="button_sumbit_news btn btn-dark btn-sm float-right ml-3">Orqaga</a>
                                        <button type="submit" className="button_sumbit_news btn btn-success btn-sm float-right ml-3">Saqlash</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddNewsForm;
