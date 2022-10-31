/**
 * Chartjs 2
 * - Chartjs2는 기본 Javascript에서 그래프를 표시해 주는 기능을 하는 라이브러리
 * - ReactChartjs2라는 wrapper 라이브러리를 통해 React에서 사용 가능하다.
 * 
 * http://react-chartjs-2.js.org/
 * 
 * yarn add chart.js react chartjs-2
 * 
 * ------------
 * 
 * Lodash
 * - 배열, JSON 등의 연속성 자료형에 대한 탐색 및 깊은 복사 등의 기능을 제공함
 * 
 * http://lodash.com/
 * 
 * yarn ad lodash
 * 
 * 참고 페이지: http://velog.io/@kysung95/짤막글-lodash-알고-쓰자
 */
import React, { memo } from 'react';
import styled from 'styled-components';
import { cloneDeep } from 'lodash';

import {
    // 공통 항목들
    Chart,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    // 세로, 가로 막대 그래프 전용
    BarElement,
    // 선 그래프 및 산점도 그래프 전용
    PointElement,
    LineElement,
    // 레이더 차트 전용 (선그래프 요소를 포함해야 함)
    RadialLinearScale,
    Filler,
    // 파이그래프 전용
    ArcElement
} from 'chart.js';

import { Bar, Line, Radar, Pie, Scatter } from 'react-chartjs-2';

Chart.register(
    // 공통 항목들
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    // 세로, 가로 막대 그래프 전용
    BarElement,
    // 선 그래프 및 산점도 그래프 전용
    PointElement,
    LineElement,
    // 레이더 차트 전용(선그래프 요소를 포함해야 함)
    RadialLinearScale,
    Filler,
    // 파이그래프 전용
    ArcElement
);

const PlotContainer = styled.div`
    width: 33.3%;
    padding: 20px;
    box-sizing: border-box;
    height: 400px;
`;

const ChartEx = memo(() => {
    // 그래프 기본 옵션
    const defaultOption = {
        responsive: true,
        maintainAspectRation: false,
        plugins: {
            legend: {
                position: 'bottom',
            }
        },
    };

    // 가로 막대 그래프를 위한 옵션 --> 인덱스축이 y축임을 추가로 지정함
    const hgraphOption = cloneDeep(defaultOption);
    hgraphOption.indexAxis = 'y';

    // 레이더 그래프를 위한 옵션(다른 그래프와 옵션 공유 불가)
    const radarOption = cloneDeep(defaultOption);

    // 파이 그래프를 위한 옵션(다른 그래프와 옵션 공유 불가)
    const pieOption = cloneDeep(defaultOption);

    // 가로, 세로 막대 그래프를 위한 데이터 정의
    const grade = {
        labels: ['철수', '영희', '민수', '수현', '호영'],
        datasets: [{
            label: '국어',
            data: [98, 88, 92, 63, 100],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }, {
            label: '영어',
            data: [82, 90, 70, 60, 50],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            borderColor: 'rgba(53, 162, 235, 1)',
            borderWidth: 1
        }, {
            label: '수학',
            data: [88, 62, 71, 31, 84],
            backgroundColor: 'rgba(258, 234, 153, 0.5)',
            borderColor: 'rgba(258, 234, 153, 1)',
            borderWidth: 1
        }]
    };

    // 선 그래프를 위한 데이터 정의
    const covid19 = {
        labels: ['06/18', '06/19', '06/20', '06/21', '06/22', '06/23', '06/14'],
        datasets: [{
            label: '서울시 확진자',
            data: [1237, 1108, 719, 2042, 1775, 1580, 1605],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }, {
            label: '인천시 확진자',
            data: [260, 278, 222, 481, 404, 372, 366],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            borderColor: 'rgba(53, 162, 235, 1)',
            borderWidth: 1
        }]
    };

    // 레이더 그래프를 위한 데이터 정의
    const student = {
        labels: ['컴퓨터활용', '퍼블리싱', '프론트엔드', '백엔드', '데이터베이스'],
        datasets: [{
            label: '점수',
            data: [72, 95, 94, 77, 82],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderWidth: 1
        }]
    };

    // 파이 그래프를 위한 데이터 정의
    const studentPie = {
        labels: ['컴퓨터활용', '퍼블리싱', '프론트엔드', '백엔드', '데이터베이스'],
        datasets: [{
            label: '점수',
            data: [72, 95, 94, 77, 82],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 152, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 152, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1
        }]
    };

    // 산점도 그래프를 위한 데이터 정의
    // X축 데이터에 따른 Y축의 값을 포인트로 표시한 그래프
    // X에 따른 Y값의 변화 경향을 예측하는데 사용된다.
    const studentScatter = {
        // X축 --> 국어점수
        labels: [98, 88, 92, 63, 100],
        datasets: [{
            label: '영어',
            data: [82, 90, 70, 60, 50],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }, {
            label: '수학',
            data: [88, 62, 71, 31, 84],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            borderColor: 'rgba(53, 162, 235, 1)',
            borderWidth: 1
        }]
    }

  return (
    <div>
        <h2>Chart</h2>

        <div sytle={{display: 'flex', flexWrap: 'wrap'}}>
            {/* 세로 막대 그래프 */}
            <PlotContainer>
                <h3>세로 막대 그래프</h3>
                <Bar Options={defaultOption} data={grade} />
            </PlotContainer>

            {/* 가로 막대 그래프 */}
            <PlotContainer>
                <h3>가로 막대 그래프</h3>
                <Bar Options={hgraphOption} data={grade} />
            </PlotContainer>

            {/* 선 그래프 */}
            <PlotContainer>
                <h3>선 그래프</h3>
                <Line options={defaultOption} data={covid19} />
            </PlotContainer>

            {/* 레이더 그래프 */}
            <PlotContainer>
                <h3>레이더 그래프</h3>
                <Radar options={radarOption} data={student} />
            </PlotContainer>

            {/* 파이 그래프 */}
            <PlotContainer>
                <h3>파이 그래프</h3>
                <Pie options={pieOption} data={studentPie} />
            </PlotContainer>

            {/* 산점도 그래프 */}
            <PlotContainer>
                <h3>산점도 그래프</h3>
                <Scatter options={defaultOption} data={studentScatter} />
            </PlotContainer>
        </div>
    </div>
  );
});

export default ChartEx;