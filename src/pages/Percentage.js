import React from "react";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import { CalculatorStyled } from "../styles/CalculatorStyled";

export default function Percentage() {
    return(
        <CalculatorStyled>
            <Header />
            <PageTitle title="Calculator (계산기)" txt = "보험금 승인 확률 계산기입니다."/>
            <div className="calc-wrapper">
                <div className="calc-txt">재해 발생 당시 정보와 현재 본인의 상황을 입력해주세요.</div>
                <div className="calc-contents">
                    <div className = "calc-items">
                        <div className="calc-items-name">발생 년도</div>
                        <select>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                        </select>
                    </div>
                    <div className = "calc-items">
                        <div className="calc-items-name">직종</div>
                        <select>
                            <option value="2023">어업</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                        </select>
                    </div>
                    <div className = "calc-items">
                        <div className="calc-items-name">병명</div>
                        <select>
                            <option value="2023">뇌출혈</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                        </select>
                    </div>
                    <div className = "calc-items">
                        <div className="calc-items-name">근무지역</div>
                        <select>
                            <option value="2023">수도권</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                        </select>
                    </div>
                </div>

                <div className="calc-gap">
                    .<br/>
                    .<br/>
                    .<br/>
                    .
                </div>
                
                <div className="calc-result">
                    <h2>승인 확률</h2>
                    <span className = "calc-price">67</span>
                    <span className = "calc-unit">%</span>
                </div>
            </div>

            <div className="calc-buttons">
                <button className="calc-button-ways">
                    산재보험 절차/신청방법<br/>보러가기
                </button>
                <button className="calc-button-apply">
                    산재보험 신청 바로가기
                </button>
            </div>
        </CalculatorStyled>
    )
}