/**
 * FsLightBoxEx
 * 어떤 요소 (img, button, a 등)를 클릭했을 때
 * 지정된 이미지, 영상 등을 모달 팝업으로 표시하는 기능
 * 
 * http://fslightbox.com
 * 
 * yarn add fslightbox-react 
 */
import React, { memo, useState } from 'react'; 
import styled from 'styled-components';
import FsLightbox from 'fslightbox-react';

import img1 from '../assets/img/img01.jpg';
import img2 from '../assets/img/img02.jpg';
import img3 from '../assets/img/img03.jpg';
import img4 from '../assets/img/img04.jpg';
import img5 from '../assets/img/img05.jpg';

const Button = styled.button`
  border: 0;
  outline: none;
  cursor: pointer;
  padding: 0;
  margin: 0 5px;
`;

const FsLightboxEx = memo(() => {
  // 단일 이미지를 사용할 경우 모달창 표시 여부에 대한 상태값
  const [singleToggler, setSingleToggler] = useState(false);

  // 복수 이미지를 사용할 경우 모달창 표시 여부와 몇 번째 이밎를 표시할지에 대한 상태값
  const [multiToggler, setMultiToggler] = useState({
    open: false,
    index: 1
  });

  // 단일 Youtube 영상을 사용할 경우 모달창 표시 여부에 대한 상태값
  const [youtubeToggler, setYoutubeToggler] = useState(false);
  
  // 복수 Youtube 영사을 사용할 경우 모달창 표시 여부와 몇 번째 영상을 표시할지에 대한 상태값
  const [youtubeMultiToggler, setYoutubeMultiToggler] = useState({
    open: false,
    index: 1
  });


  return (
    
    <div>
      <h2>FsLightboxEx</h2>

      <h3>Single Gallery</h3>
      <div>
        <Button onClick={e => {setSingleToggler(!singleToggler)}}>
          <img src={img1} alt="img1" width='150'/>
        </Button>
        <FsLightbox sources={[img1]} toggler={singleToggler} />
      </div>

      <h3>Multi Gallery</h3>
      <div>
        <Button onClick={e => setMultiToggler({open: !multiToggler.open, index: 1})}>
          <img src={img1} width="150" alt="img1" />
        </Button>
        <Button onClick={e => setMultiToggler({open: !multiToggler.open, index: 2})}>
          <img src={img2} width="150" alt="img2" />
        </Button><Button onClick={e => setMultiToggler({open: !multiToggler.open, index: 3})}>
          <img src={img3} width="150" alt="img3" />
        </Button><Button onClick={e => setMultiToggler({open: !multiToggler.open, index: 4})}>
          <img src={img4} width="150" alt="img4" />
        </Button><Button onClick={e => setMultiToggler({open: !multiToggler.open, index: 5})}>
          <img src={img5} width="150" alt="img5" />
        </Button>
        <FsLightbox toggler={multiToggler.open} sources={[img1, img2, img3, img4, img5]} slide={multiToggler.index} />
      </div>

      <h3>Youtube Single link</h3>
      <div>
        <Button onClick={e => setYoutubeToggler(!youtubeToggler)}>
          <img src="http://img.youtube.com/vi/0gL_0dxiZjA.maxresdefault.jpg" alt="img1" width='150' />
        </Button>
        <FsLightbox toggler={youtubeToggler} sources={[
          'https://www.youtube.com/watch?v=0gL_0dxiZjA'
        ]} />
      </div>

      <h3>Youtube Multi link</h3>
      <div>
        <Button onClick={e => setYoutubeMultiToggler({open: !youtubeMultiToggler.open, index: 1})}>
          <img src="http://img.youtube.com/vi/0gL_0dxiZjA.maxresdefault.jpg" alt="img1" width='150' />
        </Button>
        <Button onClick={e => setYoutubeMultiToggler({open: !youtubeMultiToggler.open, index: 2})}>
          <img src="http://img.youtube.com/vi/XpLZQErkvK8.maxresdefault.jpg" alt="img1" width='150' />
        </Button>
        <Button onClick={e => setYoutubeMultiToggler({open: !youtubeMultiToggler.open, index: 3})}>
          <img src="http://img.youtube.com/vi/z3QPZrsA9Nk.maxresdefault.jpg" alt="img1" width='150' />
        </Button>
        <FsLightbox toggler={youtubeMultiToggler.open} sources={[
          'https://www.youtube.com/watch?v=0gL_0dxiZjA',
          'https://www.youtube.com/watch?v=XpLZQErkvK8',
          'https://www.youtube.com/watch?v=z3QPZrsA9Nk'
        ]} slide={youtubeMultiToggler.index} />
      </div>
    </div>
  )
});

export default FsLightboxEx;