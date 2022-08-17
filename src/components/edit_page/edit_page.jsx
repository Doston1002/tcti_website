import { useRef, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Editor } from '@tinymce/tinymce-react';

function EditPageForm() {
    const { id } = useParams()
    const [found, setFound] = useState([])
    useEffect(() => {
        fetch(`http://tcti.uz/api/sub_categories/get/${id}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(function (res) { return res.json(); })
            .then(function (data) {
                setFound(data[0])
            })

    }, [])
    console.log(found);
    const page_name_uz = useRef()
    const page_name_ru = useRef()
    const page_name_en = useRef()
    const page_main_id = useRef()
    const page_filter_id = useRef()
    const page_title_uz = useRef()
    const page_title_ru = useRef()
    const page_title_en = useRef()
    const page_main_uz = useRef()
    const page_main_ru = useRef()
    const page_main_en = useRef()


    return (
        <>
            <div className="content">
                <div className="container-fluid">
                    <div className="page-title-box">
                        <div className="row align-items-center">
                            <div className="col-sm-6">
                                <h4>Sahifani o'zgartirish</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="mt-0 header-title">Sahifani o'zgartirish</h4>
                                    <form autoComplete="off" className="el_form page_form" onSubmit={(e) => {
                                        e.preventDefault()
                                        let body = {
                                            section_name_uz: page_name_uz.current.value,
                                            section_name_ru: page_name_ru.current.value,
                                            section_name_en: page_name_en.current.value,
                                            section_title_uz: page_title_uz.current.value,
                                            section_title_ru: page_title_ru.current.value,
                                            section_title_en: page_title_en.current.value,
                                            section_main_uz: page_main_uz.current.getContent(),
                                            section_main_ru: page_main_ru.current.getContent(),
                                            section_main_en: page_main_en.current.getContent(),
                                            menu_id: page_main_id.current.value,
                                            filter_id: page_filter_id.current.value,
                                            id: found.id
                                        }
                                        fetch('http://tcti.uz/api/sub_categories/edit', {
                                            method: 'POST',
                                            headers: {
                                                'Accept': 'application/json',
                                                'Content-Type': 'application/json'
                                            },
                                            body: JSON.stringify(
                                                body
                                            )
                                        }).then(function (res) { return res.json(); })
                                            .then(function (data) { console.log(data); })
                                        window.location = '/admin/page'
                                        console.log(page_filter_id.current.value);
                                    }}>
                                        <div className="form-group row">
                                            <label for="example-text-input" className="col-sm-2 col-form-label">Sahifa Nomini kiriting o'zbek
                                                tilida</label>
                                            <div className="col-sm-10">
                                                <input type="text" ref={page_name_uz} className="form-control page_name_uz" name="section_name_uz" defaultValue={found.section_name_uz} required />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-text-input" className="col-sm-2 col-form-label">Sahifa Nomini kiriting rus
                                                tilida</label>
                                            <div className="col-sm-10">
                                                <input type="text" ref={page_name_ru} className="form-control page_name_ru" name="section_name_ru" defaultValue={found.section_name_ru} required />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-text-input" className="col-sm-2 col-form-label">Sahifa Nomini kiriting ingliz
                                                tilida</label>
                                            <div className="col-sm-10" >
                                                <input type="text" className="form-control page_name_en" name="section_name_en" defaultValue={found.section_name_en} ref={page_name_en} required />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-text-input" className="col-sm-2 col-form-label">Bo'lim turini tanlang</label>
                                            <div className="col-sm-10" >
                                                <select name="subCategoryId menu_id" className="main_selector form-control" defaultValue={found.menu_id} ref={page_main_id}>
                                                    <option value="0">Kerak emas</option>
                                                    <option value="1">Umumiy Ma'lumotlar</option>
                                                    <option value="2">Tuzilma</option>
                                                    <option value="3">Abituriyent</option>
                                                    <option value="4">Talabalarga</option>
                                                    <option value="5">Faoliyat</option>
                                                    <option value="6">Aloqalar</option>
                                                    <option value="7">INTERAKTIV XIZMAT</option>
                                                    <option value="8">KORRUPSIYAGA QARSHI KURASHISH</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-text-input" className="col-sm-2 col-form-label">Yo'nalishni tanlang</label>
                                            <div className="col-sm-10" >
                                                <select className="filter_selector form-control" name="menu_id" ref={page_filter_id}>
                                                    <option value="0">Kerak emas</option>
                                                    <option value="Yuqori molekulali birikmalar va plastmassalar">Yuqori molekulali birikmalar va plastmassalar</option>
                                                    <option value="Organik kimyo va asosiy organik sintez texnologiyasi">Organik kimyo va asosiy organik sintez texnologiyasi</option>
                                                    <option value="Neft-gazni qayta ishlash kimyoviy texnologiyasi">Neft-gazni qayta ishlash kimyoviy texnologiyasi</option>
                                                    <option value="Sellyuloza va yog'ochsozlik texnologiyasi">Sellyuloza va yog'ochsozlik texnologiyasi</option>
                                                    <option value="Fizika va elektrotexnika">Fizika va elektrotexnika</option>
                                                    <option value="Noorganik moddalar kimyoviy texnologiyasi">Noorganik moddalar kimyoviy texnologiyasi</option>
                                                    <option value="Silikat materiallari, nodir va kamyob metallar texnologiyasi">Silikat materiallari, nodir va kamyob metallar texnologiyasi</option>
                                                    <option value="Kimyoviy texnologik jarayonlar va qurilmalar">Kimyoviy texnologik jarayonlar va qurilmalar</option>
                                                    <option value="Noorganik, analitik, fizikaviy va kolloid kimyo">Noorganik, analitik, fizikaviy va kolloid kimyo</option>
                                                    <option value="Umumiy va noorganik kimyo">Umumiy va noorganik kimyo </option>
                                                    <option value="Sanoat ekologiyasi">Sanoat ekologiyasi </option>
                                                    <option value="Oziq-ovqat mahsulotlari texnologiyasi">Oziq-ovqat mahsulotlari texnologiyasi</option>
                                                    <option value="Go’sht-sut ,konservalangan oziq-ovqat mahsulotlari texnologiyasi">Go’sht-sut ,konservalangan oziq-ovqat mahsulotlari texnologiyasi</option>
                                                    <option value="Oziq-ovqat sanoati mashina va jixozlari-Mexanika asoslari">Oziq-ovqat sanoati mashina va jixozlari-Mexanika asoslari</option>
                                                    <option value="Informatika, avtomatlashtirish va boshqaruv">Informatika, avtomatlashtirish va boshqaruv</option>
                                                    <option value="Sanoat iqtisodiyoti va menejmenti">Sanoat iqtisodiyoti va menejmenti</option>
                                                    <option value="Sifat menejmenti va mahsulotlar xavfsizligi">Sifat menejmenti va mahsulotlar xavfsizligi</option>
                                                    <option value="O`zbek tili va kasb ta'limi">O`zbek tili va kasb ta'limi</option>
                                                    <option value="Oliy matematika">Oliy matematika</option>
                                                    <option value="Enologiya, bijg'ish maxsulotlari va alkogolsiz ichimliklar texnologiyasi va servis">Enologiya, bijg'ish maxsulotlari va alkogolsiz ichimliklar texnologiyasi va servis</option>
                                                    <option value="Biotexnologiya">Biotexnologiya</option>
                                                    <option value="Sanoat ekologiyasi">Sanoat ekologiyasi</option>
                                                    <option value="Ijtimoiy-siyosiy fanlar">Ijtimoiy-siyosiy fanlar</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-text-input" className="col-sm-2 col-form-label">Sahifa Sarlavhasini kiriting o'zbek
                                                tilida</label>
                                            <div className="col-sm-10" >
                                                <input ref={page_title_uz} defaultValue={found.section_title_uz} type="text" className="form-control page_title_uz" name="section_title_uz" required />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-text-input" className="col-sm-2 col-form-label">Sahifa Sarlavhasini kiriting rus
                                                tilida</label>
                                            <div className="col-sm-10" >
                                                <input ref={page_title_ru} defaultValue={found.section_title_ru} type="text" className="form-control page_title_ru" name="section_title_ru" required />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-text-input" className="col-sm-2 col-form-label">Sahifa Sarlavhasini kiriting ingliz
                                                tilida</label>
                                            <div className="col-sm-10" >
                                                <input ref={page_title_en} defaultValue={found.section_title_en} type="text" className="form-control page_title_en" name="section_title_en" required />
                                            </div>
                                        </div>
                                        <div className="pageBody mt-3">
                                            <label className="col-sm-2 col-form-label">Sahifaning asosini kiriting o'zbek tilida</label>
                                            <Editor
                                                onInit={(evt, editor) => page_main_uz.current = editor}
                                                initialValue={found.section_main_uz}
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
                                        <div className="pageBody mt-3">
                                            <label className="col-sm-2 col-form-label">Sahifaning asosini kiriting rus tilida</label>
                                            <Editor
                                                onInit={(evt, editor) => page_main_ru.current = editor}
                                                initialValue={found.section_main_ru}
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
                                        <div className="pageBody mt-3">
                                            <label className="col-sm-2 col-form-label">Sahifaning asosini kiriting ingliz tilida</label>
                                            <Editor
                                                onInit={(evt, editor) => page_main_en.current = editor}
                                                initialValue={found.section_main_en}
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
                                        <div className="mt-4">
                                            <a href="/api/news/all" className="button_sumbit_news btn btn-dark btn-sm float-right ml-3">Orqaga</a>
                                            <button type="submit" className="button_sumbit_news btn btn-success btn-sm float-right ml-3">Saqlash</button>
                                        </div>
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

export default EditPageForm;
