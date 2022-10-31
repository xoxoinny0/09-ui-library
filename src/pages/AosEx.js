/**
 * AOS
 * Animation On Scroll
 * 스크롤바의 위치에 따라 재생되는 애니메이션 처리
 * 
 * http://michalsnik.github.io/aos/
 * 
 * yarn add aos
 */
import React, { memo, useEffect } from 'react';
import styled from 'styled-components';
import AOS from "aos";
import "aos/dist/aos.css";

// 애니메이션을 적용할 박스
const Box = styled.div`
  width: 300px;
  height: 200px;
  font-size: 40px;
  color: white;
  background-color: #f60;
  text-align: center;
  line-height: 200px;
  margin: 250px auto;
`;

const AosEx = memo(() => {

  useEffect(() => {
    // 웹페이지가 열림과 동시에 AOS를 초기화 하기 위해서 호출되어야 함.
    // React의 경우 컴포넌트가 초기 렌더링 된 직후를 의미
    AOS.init();
  },[]);

  return (
    <div>
      <h2>AOS</h2>

      <Box data-aos="fade-zoom-in" data-aos-offset="0" data-aos-dasing="ease-in-sine" data-aos-duration="600">AOS</Box>

      <Box data-aos="fade-left" data-aos-offset="300" data-aos-dasing="ease-in-sine" data-aos-duration="600">AOS</Box>

      <Box data-aos="fade-right" data-aos-offset="0" data-aos-dasing="ease-in-sine" data-aos-duration="600">AOS</Box>

      <Box data-aos="fade-up" data-aos-offset="300" data-aos-dasing="ease-in-sine" data-aos-duration="600">AOS</Box>

      <Box data-aos="fade-down" data-aos-offset="100" data-aos-dasing="ease-in-sine" data-aos-duration="600">AOS</Box>
    </div>
  );
});

export default AosEx;