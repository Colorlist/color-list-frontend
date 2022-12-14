import React from "react";
import "./Qlists.css";
import Pagination from "../../components/Pagination";
import { problemList } from "./problemList";
import SelectGroup from "../../components/SelectGroup";

// const data2 = Array(10).fill(["2022년도", "1회차", "1-2", "문제 제목 얼레벌레 블라블라", "2022.7.23",])

function Mypage() {
  return (
    <div className="mypage">
      <article className="Qpage">
        <h2 className="title text-center">문제 목록</h2>
        <section className="view-arrange"></section>
        <div className="most-viewed-list">
          <h3 className="mostViewed-Q-list-heading ml-4">가장 많이 본 문제</h3>
          <table
            className="table table-zebra w-full"
            aria-labelledby="Mostviewd-list-heading"
          >
            <thead>
              <tr>
                <th>선택</th>
                <th>연도</th>
                <th>회차</th>
                <th>유형</th>
                <th>문제 이름</th>
                <th>푼 날짜</th>
              </tr>
            </thead>
            <tbody>
              {problemList.slice(0, 5).map((item) => (
                <tr>
                  <td>
                    <input type="checkbox" className="checkbox checkbox-" />
                  </td>
                  <td>{item.year}</td>
                  <td>{item.round}</td>
                  <td>{item.type}</td>
                  <td>{item.title}</td>
                  <td>{item.solvedAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <section className="save-arrange"></section>
        <div className="most-solved-list">
          <h3 className="mostSolved-Q-list-heading ml-4">가장 많이 푼 문제</h3>
          <table
            className="table table-zebra w-full"
            aria-labelledby="Mostsolved-list-heading"
          >
            <thead>
              <tr>
                <th>선택</th>
                <th>연도</th>
                <th>회차</th>
                <th>유형</th>
                <th>문제 이름</th>
                <th>푼 날짜</th>
              </tr>
            </thead>
            <tbody>
              {problemList.slice(0, 5).map((item) => (
                <tr>
                  <td>
                    <input type="checkbox" className="checkbox checkbox-" />
                  </td>
                  <td>{item.year}</td>
                  <td>{item.round}</td>
                  <td>{item.type}</td>
                  <td>{item.title}</td>
                  <td>{item.solvedAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <section className="all">
          <div className="question-list">
            <h3 className="all-Q-list-heading ml-4">모든 문제</h3>
            <SelectGroup />
            <table
              className="table table-zebra w-full"
              aria-labelledby="solved-list-heading"
            >
              <thead>
                <tr>
                  <th>선택</th>
                  <th>연도</th>
                  <th>회차</th>
                  <th>유형</th>
                  <th>문제 이름</th>
                  <th>푼 날짜</th>
                </tr>
              </thead>
              <tbody>
                {problemList.map((item) => (
                  <tr>
                    <td>
                      <input type="checkbox" className="checkbox checkbox-" />
                    </td>
                    <td>{item.year}</td>
                    <td>{item.round}</td>
                    <td>{item.type}</td>
                    <td>{item.title}</td>
                    <td>{item.solvedAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <footer className="flex flex-row justify-between">
          <button type="button" className="w-20 bg-yellow-300">
            출력
          </button>
          <Pagination />
          <div className="w-20 opacity-0">숨김</div>
        </footer>
      </article>
    </div>
  );
}

export default Mypage;
