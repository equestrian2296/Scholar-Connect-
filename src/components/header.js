import styled from "styled-components";

const Header = (props) => {
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home">  
            <img src="/images/logof.svg" alt="" />
          </a>
        </Logo>
        <Search>
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <SearchIcon>
            <img src="/images/search-icon-png-7.svg" alt="" />
          </SearchIcon>
        </Search>
        <Nav>
          <NavListWrap>
            <NavList className="active">
              <a>
                <img src="/images/nav-home.svg" alt="" />
                <span>Home</span>
              </a>
            </NavList>

            <NavList>
              <a>
                <img src="/images/nav-network.svg" alt="" />
                <span>My Network</span>
              </a>
            </NavList>

            <NavList>
              <a>
                <img src="/images/nav-jobs.svg" alt="" />
                <span>Projects</span>
              </a>
            </NavList>

            <NavList>
              <a>
                <img src="/images/nav-messaging.svg" alt="" />
                <span>Messaging</span>
              </a>
            </NavList>

            <NavList>
              <a>
                <img src="/images/nav-notifications.svg" alt="" />
                <span>Notifications</span>
              </a>
            </NavList>

            <User>
              <a>
                <img src="/images/user.svg" alt="" />
                <span>Me</span>
                <img src="/images/down-icon.svg" alt="" />
              </a>

              <SignOut>
                <a>Sign Out</a>
              </SignOut>
            </User>

            <Work>
              <a>
                <img src="/images/nav-work.svg" alt="" />
                <span>
                  Work
                  <img src="/images/down-icon.svg" alt="" />
                </span>
              </a>
            </Work>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 80px; /* Set height to 80px */
  z-index: 100;

  /* Styling */
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  padding: 0 24px;

`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
  height: 80px; /* Ensure content is 80px *
`;

const Logo = styled.span`
  /* Layout */
  margin-right: 8px;

  /* Styling */
  font-size: 0px;

  /* Nested styles for img */
  img {
    height: 80px;
    width: 130px;
  }

`;

const Search = styled.div`
    /* Opacity and layout */
  opacity: 1;
  flex-grow: 1;
  position: relative;

  /* Nested styles for div */
  & > div {
    max-width: 280px;

    /* Nested styles for input */
    input {
      /* Reset styles */
      border: none;
      box-shadow: none;

      /* Styling */
      background-color: #eef3f8;
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.9);
      width: 218px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      border-color: #dce6f1;
      vertical-align: text-top;
    }
  }
`;


const SearchIcon = styled.div`
  /* Layout */
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 6px;
  left: 2px;

  /* Styling */
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;

  /* Flexbox styles */
  display: flex;
  justify-content: center;
  align-items: center;

  /* Nested styles for img */
  img {
    height: 20px;
    width: 20px;
  }
`;

const Nav = styled.nav`
  /* Layout */
  margin-left: auto;
  display: block;

  /* Responsive styles */
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: #fff; /* Use hex code for white */
    width: 100%;
  }
`;

const NavListWrap = styled.ul`
  /* Layout */
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;

  /* Active state styles */
  .active {
    span:after {
      /* Reset styles */
      content: "";

      /* Styling */
      transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);
    }
  }
`;

const NavList = styled.li`
  display: flex;
  align-items: center;
  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    text-decoration: none;

    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }

    @media (max-width: 768px) {
      min-width: 70px;
    }
  }

  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;

const SignOut = styled.div`
  position: absolute;
  top: 45px;
  background: white;
  border-radius: 0 0 5px 5px;
  width: 100px;
  height: 40px;
  font-size: 16px;
  transition-duration: 167ms;
  text-align: center;
  display: none;
`;

const User = styled(NavList)`
  /* Icon styles */
  a > svg {
    width: 24px;
    border-radius: 50%;
  }

  a > img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  /* Span styles */
  span {
    display: flex;
    align-items: center;
  }

  /* Hover state */
  &:hover {
    ${SignOut} {
      /* Center the sign out button */
      align-items: center;
      display: flex;
      justify-content: center;
    }
  }
`;

const Work = styled(User)`
  /* Add a border to the left */
  border-left: 1px solid rgba(0, 0, 0, 0.08);
`;

export default Header;
