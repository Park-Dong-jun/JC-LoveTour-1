import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Carousel,
  Container,
  Nav,
  Form,
  Button,
  Figure,
  Row,
  Col,
  InputGroup,
} from 'react-bootstrap';
import logo from '../../assets/logo.png';
import map from '../../assets/map.png';
// import styled from 'styled-components';

// src 속 뜨지 않던 holder.js -> https://via.placeholder.com/이미지규격 으로 변경시 전부 정상으로 뜸
// react.svg 사용하지 않았기에 삭제

function MainHeader() {
  const [showMenu, setShowMenu] = useState(false); // 마우스 호버 상태를 저장하는 상태값

  return (
    // header - logo, search, mapicon
    <Container>
      <Row bg="light">
        <Col md={4}>
          <Figure>
            <Figure.Image
              className="me-2 mt-1"
              width={300}
              height={52}
              src={logo}
              alt="logo"
            />
          </Figure>
        </Col>
        <Col md={6} className="mt-3">
          {/* 버튼을 인풋안에 넣었음 */}
          <InputGroup>
            <Form.Control
              type="search"
              placeholder="어디로, 어떤 여행을 떠나실 예정이신가요?"
              bg="secondary"
              aria-label="Search"
            />
            <Button variant="outline-secondary">검색</Button>
          </InputGroup>

          {/* 아래 주석을 풀면 버튼은 인풋 밖으로 나옴 */}

          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="어디로, 어떤 여행을 떠나실 예정이신가요?"
              className="me-2"
              aria-label="Search"
            />
            <Button>
              search
            </Button>
          </Form> */}
        </Col>

        <Col md={2}>
          <Figure className="text-center">
            <Figure.Image
              className="mt-3"
              width={30}
              height={30}
              src={map}
              alt="map"
            />
            <Figure.Caption className="text-dark">지도로 보기</Figure.Caption>
          </Figure>
        </Col>
      </Row>
      {/* // 메뉴 */}

      {/* 메뉴바 */}
      <Container>
        <Row>
          <div>
            <Nav
              className="justify-content-center"
              activeKey="/home"
              onMouseEnter={() => setShowMenu(true)} // 네비게이션에 마우스를 올렸을 때 상태값 변경
              onMouseLeave={() => setShowMenu(false)} // 네비게이션에서 마우스를 내렸을 때 상태값 변경
            >
              <Col md="auto">
                <Nav.Item as="li">
                  <Nav.Link href="/home">제천 러브투어</Nav.Link>
                  {showMenu && ( // 마우스 호버 상태일 때만 하위 리스트 보이기
                    <ul>
                      <Nav.Link as="a" href="#">
                        러브투어 소개
                      </Nav.Link>
                      <Nav.Link as="a" href="#">
                        지원 혜택
                      </Nav.Link>
                      <Nav.Link as="a" href="#">
                        사진 갤러리
                      </Nav.Link>
                      <Nav.Link as="a" href="#">
                        영상 갤러리
                      </Nav.Link>
                    </ul>
                  )}
                </Nav.Item>
              </Col>

              <Col md="auto">
                <Nav.Item as="li">
                  <Nav.Link eventKey="#">제천의 이모저모</Nav.Link>
                  {showMenu && (
                    <ul>
                      <Nav.Link as="a" href="#">
                        관광지
                      </Nav.Link>
                      <Nav.Link as="a" href="#">
                        전통시장
                      </Nav.Link>
                      <Nav.Link as="a" href="#">
                        음식
                      </Nav.Link>
                      <Nav.Link as="a" href="#">
                        숙박
                      </Nav.Link>
                      <Nav.Link as="a" href="#">
                        축제/행사
                      </Nav.Link>
                    </ul>
                  )}
                </Nav.Item>
              </Col>

              <Col md="auto">
                <Nav.Item as="li">
                  <Nav.Link eventKey="#">테마/코스</Nav.Link>
                  {showMenu && (
                    <ul>
                      <Nav.Link as="a" href="#">
                        기본코스
                      </Nav.Link>
                      <Nav.Link as="a" href="#">
                        힐링코스
                      </Nav.Link>
                      <Nav.Link as="a" href="#">
                        가스트로투어
                      </Nav.Link>
                      <Nav.Link as="a" href="#">
                        제천시티투어
                      </Nav.Link>
                    </ul>
                  )}
                </Nav.Item>
              </Col>

              <Col md="auto">
                <Nav.Item as="li">
                  <Nav.Link eventKey="#">예약</Nav.Link>
                  {showMenu && (
                    <ul>
                      <Nav.Link as="a" href="#">
                        예약 신청
                      </Nav.Link>
                      <Nav.Link as="a" href="#">
                        예약 조회/취소
                      </Nav.Link>
                    </ul>
                  )}
                </Nav.Item>
              </Col>

              <Col md="auto">
                <Nav.Item as="li">
                  <Nav.Link eventKey="#">알림마당</Nav.Link>
                  {showMenu && (
                    <ul>
                      <Nav.Link as="a" href="#">
                        공지사항
                      </Nav.Link>
                      <Nav.Link as="a" href="#">
                        자주하는 질문
                      </Nav.Link>
                    </ul>
                  )}
                </Nav.Item>
              </Col>
            </Nav>
          </div>
        </Row>
      </Container>
      {/* // 캐러셀 */}
      <Row>
        <Container>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                width={800}
                height={400}
                src="https://via.placeholder.com/800x400"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                width={800}
                height={400}
                src="https://via.placeholder.com/800x400"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                width={800}
                height={400}
                src="https://via.placeholder.com/800x400"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
      </Row>
    </Container>
  );
}

export default MainHeader;
