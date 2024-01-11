import Breadcrumbs from '@mui/material/Breadcrumbs';
import Stack from '@mui/material/Stack';
import { ReactComponent as ArrowRight } from '../../assets/icons/chevron-right.svg';
import Link from '@mui/material/Link';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { useTheme } from 'styled-components';
import { Container } from './styles';

import { BreadCrumbsProps } from './types';
// import { useTranslation } from 'react-i18next';

export function BreadCrumbs(params: BreadCrumbsProps) {
  const { colors: theme } = useTheme();
  // const { t } = useTranslation();
  const routes = [
    {
      path: '/',
      breadcrumb: null,
    },
    {
      path: '/user-management',
      breadcrumb: `${'Gestão de Usuário'}`,
      children: [
        {
          path: '/user-management/users',
          breadcrumb: `${'Usuários'}`,
          children: [
            {
              path: '/user-management/users/new',
              breadcrumb: `${'Novo Usuário'}`,
            },
          ],
        },
      ],
    },
    {
      path: '/profiles',
      breadcrumb: `${'Perfis'}`,
      children: [
        {
          path: '/profiles/new',
          breadcrumb: `${'Novo Perfil'}`,
        },
      ],
    },
    {
      path: '/process',
      breadcrumb: `${'Execução de Meta'}`,
      children: [],
    },
    {
      path: '/goal',
      breadcrumb: 'Planejamento de Metas',
      children: [
        {
          path: '/goal/new',
          breadcrumb: 'Novo Planejamento',
        },
        {
          path: '/goal/:productionGoalOrder',
          breadcrumb: `${'Execução de Meta'}`,
        },
      ],
    },
    {
      path: '/production',
      breadcrumb: `${'Cadastro de Produção'}`,
      children: [
        {
          path: '/production/pipe',
          breadcrumb: `${'Tubo'}`,
          children: [
            {
              path: '/production/pipe/new',
              breadcrumb: `${'Novo Tubo'}`,
            },
          ],
        },
        {
          path: '/production/machine',
          breadcrumb: `${'Máquina'}`,
          children: [
            {
              path: '/production/machine/new',
              breadcrumb: `${'Nova Máquina'}`,
            },
          ],
        },
      ],
    },
  ];

  const breadcrumbs = useBreadcrumbs(routes);

  const isLast = breadcrumbs.length - 1;

  const noClick = 0;

  return (
    <Container>
      <Stack spacing={1}>
        <Breadcrumbs
          separator={<ArrowRight height="12px" color={theme.light.main} />}
          aria-label="breadcrumb"
        >
          {breadcrumbs.map(({ match, breadcrumb }, index) => (
            <Link
              key={match.pathname}
              href={match.pathname}
              underline="none"
              aria-current="page"
              fontSize="12px"
              sx={{
                color: theme.light.main,
                fontWeight: 'bold',
                pointerEvents: index === noClick || index === isLast ? 'none' : 'auto',
              }}
            >
              {breadcrumb}
            </Link>
          ))}
        </Breadcrumbs>
      </Stack>
    </Container>
  );
}
