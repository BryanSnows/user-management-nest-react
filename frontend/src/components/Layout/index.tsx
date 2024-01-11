import { useContext, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ReactComponent as LogoutIcon } from '../../assets/icons/logout.svg';
import { IRoute, LayoutProps } from './types/LayoutProps';
import {
  Container,
  Header,
  Footer,
  ChildrenContainer,
  Divider,
  IconBox,
  Box,
  UserPhoto,
  UserName,
  BoxLogout,
  LogoBox,
  OpenCloseMenuButton,
  UserBox,
  TitleBox,
} from './styles';
import {
  FiGrid as DashboardIcon,
  FiLayout as MachineMonitoringIcon,
  FiUsers as UsersIcon,
  FiChevronLeft as LeftIcon,
  FiChevronRight as RightIcon,
  FiUserCheck as ControlIcon,
  FiBarChart2 as ProductivityIcon,
} from 'react-icons/fi';
import { LuFileLineChart as ChartIcon } from 'react-icons/lu';
import { FaArrowTrendUp as GoalIcon } from 'react-icons/fa6';
import logoMenuClosed from '../../assets/images/logo-menu-closed.png';
import logoMenu from '../../assets/images/logo_sidebar_elgin.png';
import { useAuthGlobal } from '../../context/AuthProvider/useAuthGlobal';
import { NavLink } from 'react-router-dom';
import { Header2 } from '../../styles/typography';
import { useTheme } from 'styled-components';
import { ModalConfirm } from '../Modal/ModalConfirm';
import { isAllowedTransaction } from '../../routes/PrivateRoute';
import { UserTransaction } from '../../common/transactions-enums/user.transaction';
import { PageContext } from '../../context/PageContext';
import { SubRouteContainer } from './Components/SubRoutesContainer';

export function Layout({ children }: LayoutProps) {
  const { colors: theme } = useTheme();
  const { userName, profile, Logout } = useAuthGlobal();
  const [isOpen, setIsOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const { actualPage, menuSection, setMenuSection } = useContext(PageContext);

  function toggleSidebar() {
    setIsOpen(!isOpen);
  }

  const routes: IRoute[] = [
    {
      name: `${'Gestão de Usuários'}`,
      icon: <UsersIcon />,
      transactions: UserTransaction.READ,
      id: 'userManagement',
      subRoutes: [
        {
          path: '/user-management/users',
          name: `${'Usuários'}`,
          icon: '',
          id: 'user',
        },
      ],
    },

    {
      path: '/logout',
      name: `${'Sair'}`,
      icon: <LogoutIcon />,
      id: 'logout',
    },
  ];

  const showAnimation = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.1,
      },
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  function handleOpenLogoutModal() {
    setIsLogoutModalOpen(true);
  }

  function handleCloseLogoutModal() {
    setIsLogoutModalOpen(false);
  }

  return (
    <>
      <ModalConfirm
        isModalActive={isLogoutModalOpen}
        handleCancel={handleCloseLogoutModal}
        handleClose={handleCloseLogoutModal}
        handleSubmit={() => {
          if (Logout) {
            Logout();
            handleCloseLogoutModal();
          }
        }}
        title="Sair do Sistema"
        message="Deseja sair do sistema CNC?"
      />

      <Container>
        <motion.div
          className="sidebar"
          animate={{
            width: isOpen ? '355px' : '120px',
            transition: {
              duration: 1,
              type: 'spring',
              damping: 13,
            },
          }}
        >
          <Header>
            <LogoBox>
              <img
                src={isOpen ? logoMenu : logoMenuClosed}
                alt="Logo"
                aria-hidden="true"
                onClick={toggleSidebar}
              />
            </LogoBox>
            <motion.div
              className="openCloseMenuBox"
              animate={{
                width: '20px',
                height: '20px',
                transition: {
                  duration: 1,
                  type: 'spring',
                  damping: 13,
                },
              }}
            >
              <OpenCloseMenuButton
                onClick={() => {
                  toggleSidebar();
                  // setIsSubMenuOpen(true);
                }}
              >
                {isOpen ? <LeftIcon /> : <RightIcon />}
              </OpenCloseMenuButton>
            </motion.div>
          </Header>
          <Divider />
          <section>
            {routes.map((route: IRoute, index: number) => {
              if (isAllowedTransaction(route.transactions)) {
                if (route.subRoutes) {
                  return (
                    <SubRouteContainer
                      key={route.id}
                      showAnimation={showAnimation}
                      isOpen={isOpen}
                      setIsOpen={setIsOpen}
                      route={route}
                    />
                  );
                }
                return (
                  <>
                    {route?.path === '/logout' ? (
                      <BoxLogout>
                        <button
                          key={route.id}
                          className="logoutButton"
                          onClick={handleOpenLogoutModal}
                        >
                          <Box>
                            <IconBox>{route.icon}</IconBox>
                            <AnimatePresence>
                              {isOpen && (
                                <motion.p
                                  className="link-text"
                                  variants={showAnimation}
                                  initial="hidden"
                                  animate="show"
                                  exit="hidden"
                                >
                                  {route.name}
                                </motion.p>
                              )}
                            </AnimatePresence>
                          </Box>
                        </button>
                      </BoxLogout>
                    ) : (
                      <NavLink
                        key={route.id}
                        className={route.name === menuSection ? 'link linkSelected' : 'link'}
                        to={route.path ? route.path : ''}
                        onClick={() => setMenuSection(route.name)}
                      >
                        <Box>
                          <IconBox>{route.icon}</IconBox>
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                className="link-text"
                                variants={showAnimation}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                              >
                                {route.name}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </Box>
                      </NavLink>
                    )}
                  </>
                );
              }
            })}
          </section>
          <Footer>
            <UserBox>
              <UserPhoto>
                {userName
                  ? userName.split(' ').length > 1
                    ? userName.split(' ')[0].substring(0, 1) +
                      userName.split(' ')[userName.split(' ').length - 1].substring(0, 1)
                    : userName.substring(0, 2).toUpperCase()
                  : '---'}
              </UserPhoto>
              <UserName>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      className="text-name"
                      variants={showAnimation}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                    >
                      <p>
                        {userName
                          ? userName.split(' ').length > 1
                            ? userName.split(' ').at(0) + ' ' + userName.split(' ').at(-1)
                            : userName.split(' ').at(0)
                          : '------------'}
                      </p>

                      <small>{profile ? `${profile}` : '--------------'}</small>
                    </motion.div>
                  )}
                </AnimatePresence>
              </UserName>
            </UserBox>
          </Footer>
        </motion.div>

        <motion.div
          className="content"
          animate={{
            width: isOpen ? '93%' : '94%',
          }}
        >
          {/* <div className="translate"><LanguageSwitcher /></div> */}
          <ChildrenContainer>
            <TitleBox>
              <Header2 fontColor={theme.typography.darkGray}>{actualPage}</Header2>
            </TitleBox>
            <div className="children-box">{children}</div>
          </ChildrenContainer>
        </motion.div>
      </Container>
    </>
  );
}
