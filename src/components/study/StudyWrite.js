import React from 'react';
import { Link } from 'react-router-dom';

const StudyWrite = () => {
  const onClickRegister = () => {
    const checkRegister = window.confirm('등록하시겠습니까?');
    if (checkRegister) {
      alert('스터디 그룹 등록이 완료되었습니다.');
    } else {
      alert('등록 취소되었습니다.');
    }
  };

  return (
    <>
      <div className="container">
        <h2>스터디 그룹 만들기</h2>
        <form action="" method="post">
          <div className="form-group">
            <label htmlFor="title">제목</label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="제목을 입력하세요(5-100)"
              name="title"
              maxLength="100"
              required="required"
              pattern=".{4,100}"
            />
          </div>
          <div className="form-group">
            <label htmlFor="1">어학</label>
            <input
              id="1"
              type="checkbox"
              name="topic1"
              className="form-control"
            />
            <label htmlFor="2">취업</label>
            <input
              id="2"
              type="checkbox"
              name="topic2"
              className="form-control"
            />
            <label htmlFor="3">자격증</label>
            <input
              id="3"
              type="checkbox"
              name="topic3"
              className="form-control"
            />
            <label htmlFor="4">IT</label>
            <input
              id="4"
              type="checkbox"
              name="topic4"
              className="form-control"
            />
            <label htmlFor="5">기타</label>
            <input
              id="5"
              type="checkbox"
              name="topic5"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="region">지역</label>
            <select name="region" id="region">
              <option value="region1">서울</option>
              <option value="region2">부산</option>
              <option value="region3">울산</option>
              <option value="region4">대구</option>
              <option value="region5">광주</option>
              <option value="region6">대전</option>
              <option value="region7">세종</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="content">내용</label>
            <textarea
              className="form-control"
              cols="100"
              rows="5"
              id="content"
              name="content"
              placeholder="스터디 그룹을 소개해주세요."
            ></textarea>
          </div>
          <Link to="/">
            <button type="submit" onClick={onClickRegister}>
              등록
            </button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default StudyWrite;
