import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'

import Post from 'templates/post'
import Meta from 'components/meta'
import Layout from 'components/layout'

const HowToOrderIndex = ({ data, location }) => {
  return (
    <Layout location={location}>
      <Meta site={get(data, 'site.meta')} />
      <div className="container">
        <div className="row">
          <h1>주문방법</h1>
          <p>
            제품소개에 안내된 제품을 확인하신 후, 다음 연락처를 통해
            주문해주세요.
          </p>
          <ul>
            <li>연락처 02-895-5118</li>
            <li>이메일 didkorea@didkorea.co.kr </li>
          </ul>
          <p>제품 주문 시, 다음 사항을 고려하시면 좋습니다.</p>
          <ul>
            <li>주문 품목 및 규격</li>
            <li>수량</li>
            <li>주문 업체명 및 연락처, 주소</li>
          </ul>
          <p>D.I.D 제품의 품목 번호를 읽는 방법은 다음과 같습니다.</p>
        </div>
      </div>
    </Layout>
  )
}

export default HowToOrderIndex
