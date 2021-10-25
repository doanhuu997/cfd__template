import React from 'react';
import { Link } from 'react-router-dom'

export default function Course({ title, thumbnail, short_description, status, teacher, slug }) {
    return (
        <div className="col-md-4 course">
            <div className="wrap">
                <Link className="cover" to={`/cfd__template/course/${slug}`}>
                    <img src={thumbnail.link} alt="" />
                    {
                        status === "dang-dien-ra" ? <span className="badge b1">Dang Diễn Ra</span>
                            : status === "da-ket-thuc" ? <span className="badge b1">Đã kết thúc</span>
                                : <span className="badge b1">Sắp Diễn Ra</span>
                    }

                    <div className="hover">
                        <div className="top">
                            <div className="user">
                                <img src="/img/icon-user-white.svg" alt="" />
                                12</div>
                            <div className="heart">
                                <img src="/img/icon-heart.svg" alt="" /> 100
                            </div>
                        </div>
                        <div className="share">
                            <img src="/img/icon-viewmore.svg" alt="" />
                        </div>
                    </div>
                </Link>
                <div className="info">
                    <Link className="name" to={`/cfd__template/course/${slug}`}>
                        {title}
                    </Link>
                    <p className="des">
                        {short_description}
                    </p>
                </div>
                <div className="bottom">
                    <div className="teacher">
                        <div className="avatar">
                            <img src={teacher.avatar.link} alt="" />
                        </div>
                        <div className="name">{teacher.title}</div>
                    </div>
                    <Link to={`/cfd__template/register/${slug}`} className="register-btn">Đăng Ký</Link>
                </div>
            </div>
        </div>

    );
}

