import React from 'react'
import {Wrapper, Container, Title, Subtitle, ColumnLeft, BannerImage, Button} from './style/BannerPage.module.scss'
import bannerImage1 from '../../assets/image/image-1.jpeg'
import bannerImage2 from '../../assets/image/image-2.jpeg'

const BannerPage = ():JSX.Element => {
  return (
      <div className={Wrapper}>
          <div className={Container}>
              <div className={ColumnLeft}>
                  <h2 className={Subtitle}>
                      Свечи из соевого воска
                  </h2>
                  <h1 className={Title}>
                      Преобразите своё <br/>
                      пространство с <br/>
                      зажигания спички.
                  </h1>
                  <a className={Button} href="#">
                      Перейти в магазин
                  </a>
              </div>
              <img src={bannerImage2} alt="image" className={BannerImage}/>
          </div>
      </div>
  )
}

export {BannerPage}