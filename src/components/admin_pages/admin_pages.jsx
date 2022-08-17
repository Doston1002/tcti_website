import { useState, useEffect } from 'react'

function AdminPages() {
    const [pages, setPages] = useState([])
    const [searchTerm, setSearchTerm] = useState([])
    useEffect(() => {
        fetch('http://tcti.uz/api/sub_categories/all')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setPages(data.reverse())
            });
    }, [])
    console.log(pages);
    return (
        <>
            <div className="row pt-5 page_list">
                <div className="col-xl-12">
                    <div className="card ">
                        <div className="card-body page_body_admin">
                            <div div className="box page_box content_wrapper">
                                <form name="search" className='search_form'>
                                    <input type="text" className="input" name="txt" onmouseout="document.search.txt.value = ''" onChange={e => {
                                        setSearchTerm(e.target.value)
                                    }} /> <span className="deff">Search</span>
                                </form>
                            </div>
                            <a href="/" className="btn btn-danger btn-sm float-right" >Dashboardga qaytish</a>
                            <a href="/admin/page/add" className="btn btn-success mr-3 mdi mdi-account-multiple-plus btn-sm float-right"> Sahifa qo'shish</a>
                            <h4 className="mt-0 mb-4">Barcha sahifalar ro'yhati</h4>
                            <div className="table-responsive mt-5">
                                <table className="table table-hover">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Nomi</th>
                                            <th scope="col">Matn</th>
                                            <th scope="col">Havola</th>
                                            <th scope="col" colspan="2">Sozlamalar </th>
                                        </tr>
                                    </thead>
                                    {pages.reverse().filter((val) => {
                                        if (searchTerm == "") {
                                            return val
                                        } else if (val.section_name_uz.toLowerCase().includes(searchTerm.toLowerCase())) {
                                            return val
                                        }
                                    }).map(page => (
                                        <tbody className="list_item_2">
                                            <tr>
                                                <td>{page.id}</td>
                                                <td>{page.section_name_uz}</td>
                                                <td className='list_body'>Content...</td>
                                                <td>{`/page/get/${page.id}`}</td>
                                                <td className="d-flex">
                                                    <a className="btn-success edit_btn p-2 mr-3 text-light" href={`/admin/page/edit/${page.id}`}>Edit</a>
                                                    <button className="btn-danger delete_btn p-2 text-light" data-uuid="<%- i.id %>" onClick={() => {
                                                        let answer = prompt("siz rostan o'chirmoqchimisiz? Y/N")
                                                        if (answer == "Y") {
                                                            fetch('http://tcti.uz/api/sub_categories/delete', {
                                                                method: 'DELETE',
                                                                headers: {
                                                                    'Accept': 'application/json',
                                                                    'Content-Type': 'application/json'
                                                                },
                                                                body: JSON.stringify(
                                                                    {
                                                                        id: page.id
                                                                    }
                                                                )
                                                            }).then(function (res) { return res.json(); })
                                                                .then(function (data) {
                                                                    console.log("ok");
                                                                })
                                                            window.location.reload()
                                                        } else {

                                                        }
                                                    }}>Delete</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    ))}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminPages;
