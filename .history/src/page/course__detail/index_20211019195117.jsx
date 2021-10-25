import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useRouteMatch } from 'react-router';
import courseApi from '../../api/courseApi';
import { getDetail, getRelated } from '../../redux/reducers/coureseReducers'
import Course from '../../components/course';
import Accordition from './components/Accordition'
export default function Course_detail() {
  let { slug } = useParams();
  let dispatch = useDispatch()
  // let [state, setState] = useState({
  //   course: null,
  //   related: null
  // })
  const khoahoc = useSelector(state => state.coures)
  useEffect(() => {
    Promise.all([
      dispatch(getDetail(slug)),
      dispatch(getRelated(slug))
    ])

  }, [slug])
  const detail = khoahoc.Detail;
  const related = khoahoc.Related;
  console.log(detail)
  if (!detail.content) return 'Loading ....'
  //
  return (
    <main className="course-detail" id="main">
      <section className="banner" style={{ bacground: `url ( ${detail.thumbnail.link})` }}  >
        <div className="container">
          <div className="info">
            <h1></h1>
            <div className="row">
              <div className="date"><strong>Khai giảng:</strong> {detail.created_at}</div>
              <div className="time"><strong>Thời lượng:</strong> 18 buổi</div>
            </div>
            <div className="btn white round" style={{ bacgroundColor: '#70b6f1' }}>đăng ký</div>
          </div>
        </div>
        <div className="bottom">
          <div className="container">
            <div className="video">
              <div className="icon">
                <img src="img/play-icon-white.png" alt="" />
              </div> <span>giới thiệu</span>
            </div>
            <div className="money">{detail.money} VND</div>
          </div>
        </div>
      </section>
      <section className="section-2">
        <div className="container">
          <p className="des">Many Laravel apps don’t warrant the complexity of a full front-end framework like Vue or
            React. In this series, we’ll walk through a handful of simple ways to add dynamic functionality to
            your apps.</p>
          <h2 className="title">giới thiệu về khóa học</h2>
          <div className="cover">
            <img src="img/course-detail-img.png" alt="" />
          </div>
          <h3 className="title">nội dung khóa học</h3>
          {
            detail.content.map((e, i) => <Accordition key={i} {...e} num={i + 1} />)
          }
          <h3 className="title">yêu cầu cần có</h3>
          <div className="row row-check">
            <div className="col-md-6">Đã từng học qua HTML, CSS</div>
            <div className="col-md-6">Cài đặt phần mềm Photoshop,
              Adobe illustrator, Skype</div>
          </div>
          <h3 className="title">hình thức học</h3>
          <div className="row row-check">
            <div className="col-md-6">Học offline tại văn phòng, cùng Trần Nghĩa và 3 đồng nghiệp.</div>
            <div className="col-md-6">Dạy và thực hành thêm bài tập online
              thông qua Skype.</div>
            <div className="col-md-6">Được các mentor và các bạn trong team CFD hổ trợ thông qua group CFD Facebook
              hoặc phần mềm điều khiển máy tính.</div>
            <div className="col-md-6">Thực hành 2 dự án thực tế với sự hướng dẫn của CFD Team.</div>
          </div>
          <h3 className="title">
            <div className="date-start">lịch học</div>
            <div className="sub">*Lịch học và thời gian có thể thống nhất lại theo số đông học viên.</div>
          </h3>
          <p>
            <strong>Ngày bắt đầu: </strong> 09/09/2020 <br />
            <strong>Thời gian học: </strong> Thứ 3 từ 18h45-21h45, Thứ 7 từ 12h-15h, Chủ nhật từ 15h-18h
          </p>
          <h3 className="title">Người dạy</h3>
          <div className="teaches">
            <div className="teacher">
              <div className="avatar">
                <img src={detail.teacher.avatar.link} alt="" />
              </div>
              <div className="info">
                <div className="name">{detail.teacher.title}</div>
                <div className="title">Founder CFD &amp; Creative Front-End Developer</div>
                <p className="intro">
                  {detail.teacher.description}
                </p>
                <p><strong>Website:</strong> <a href="#">{detail.teacher.website}</a></p>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="user">
              <img src="img/user-group-icon.png" alt="" /> 12 bạn đã đăng ký
            </div>
            <div className="btn main btn-register round">đăng ký</div>
            <div className="btn-share btn overlay round btn-icon">
              <img src="img/facebook.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="section-3">
        <div className="container">
          <div className="textbox">
            <h3 className="sub-title">DỰ ÁN</h3>
            <h2 className="main-title">THÀNH VIÊN</h2>
          </div>
          <div className="list row">
            <div className="col-md-4 course">
              <div className="wrap">
                <a href="#" className="cover">
                  <img src="img/img.png" alt="" />
                </a>
                <div className="info">
                  <a className="name" href="#">React JS
                  </a>
                  <p className="des"> One of the best corporate fashion brands in Sydney
                  </p>
                </div>
                <div className="bottom">
                  <div className="teacher">
                    <div className="avatar">
                      <img src="img/avt.png" alt="" />
                    </div>
                    <div className="name">Vương Đặng</div>
                  </div>
                  <div className="register-btn">Đăng Ký</div>
                </div>
              </div>
            </div>
            <div className="col-md-4 course">
              <div className="wrap">
                <a href="#" className="cover">
                  <img src="img/img2.png" alt="" />
                </a>
                <div className="info">
                  <a className="name" href="#">
                    Animation
                  </a>
                  <p className="des">
                    One of the best corporate fashion brands in Sydney
                  </p>
                </div>
                <div className="bottom">
                  <div className="teacher">
                    <div className="avatar">
                      <img src="img/avt.png" alt="" />
                    </div>
                    <div className="name">Trần Nghĩa</div>
                  </div>
                  <div className="register-btn">Đăng Ký</div>
                </div>
              </div>
            </div>
            <div className="col-md-4 course">
              <div className="wrap">
                <a href="#" className="cover">
                  <img src="img/img3.png" alt="" />
                </a>
                <div className="info">
                  <a className="name" href="#">
                    Scss, Grunt JS và Boostrap 4
                  </a>
                  <p className="des">
                    One of the best corporate fashion brands in Sydney
                  </p>
                </div>
                <div className="bottom">
                  <div className="teacher">
                    <div className="avatar">
                      <img src="img/avt.png" alt="" />
                    </div>
                    <div className="name">Trần Nghĩa</div>
                  </div>
                  <div className="register-btn">Đăng Ký</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-4">
        <div className="container">
          <div className="textbox">
            <h3 className="sub-title">Khóa học</h3>
            <h2 className="main-title">Liên quan</h2>
          </div>
          <div className="list row">
            {
              related.map(e => <Course key={e._id} {...e} />)
            }
          </div>
        </div>
      </section>
    </main>
  )
}