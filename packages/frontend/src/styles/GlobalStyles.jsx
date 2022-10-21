import { createGlobalStyle } from 'styled-components'
import '@fontsource/dm-sans'

const GlobalStyles = createGlobalStyle`
  :root {

  --max-width: 1200px;

  --color-black: #2A2D34;
  --color-white: #F5F8FA;
  --color-gray: #3F4254;

  --color-green-1: #177B7E;
  --color-green-2: #0EA2A3;
  --color-green-3: #09B5B6;
  --color-green-4: #04C8C8;
  --color-green-5: #41D4D5;
  --color-green-6: #7DE0E1;
  --color-green-7: #B9ECEE;

  --color-gray-1: #545867;
  --color-gray-2: #696D80;
  --color-gray-3: #74788D;
  --color-gray-4: #7E8299;
  --color-gray-5: #9CA0B2;
  --color-gray-6: #BABDCA;
  --color-gray-7: #D8DBE2;

  --color-red-1: #8E3750;
  --color-red-2: #C03C5E;
  --color-red-3: #D93F65;
  --color-red-4: #F1416C;
  --color-red-5: #F2587E;
  --color-red-6: #F26F90;
  --color-red-7: #F39DB3;

  --color-blue-1: #156696;
  --color-blue-2: #0B82C7;
  --color-blue-3: #0690DF;
  --color-blue-4: #009EF7;
  --color-blue-5: #3EB5F8;
  --color-blue-6: #7BCBF9;
  --color-blue-7: #B8E2FA;

  --color-yellow-1: #957A1A;
  --color-yellow-2: #CAA10D;
  --color-yellow-3: #E5B407;
  --color-yellow-4: #FFC700;
  --color-yellow-5: #FECE20;
  --color-yellow-6: #FDD43F;
  --color-yellow-7: #FAE07D;

  --color-purple-1: #4E338F;
  --color-purple-2: #6036BD;
  --color-purple-3: #6938D4;
  --color-purple-4: #7239EA;
  --color-purple-5: #8351EC;
  --color-purple-6: #9369EE;
  --color-purple-7: #B499F2;

  --color-orange-1: #AF4F26;
  --color-orange-2: #C95523;
  --color-orange-3: #E45C20;
  --color-orange-4: #FE621D;
  --color-orange-5: #FD7539;
  --color-orange-6: #FC8855;
  --color-orange-7: #FAAD8C;

  --color-primary-1: var(--color-green-1);
  --color-primary-2: var(--color-green-2);
  --color-primary-3: var(--color-green-3);
  --color-primary-4: var(--color-green-4);
  --color-primary-5: var(--color-green-5);
  --color-primary-6: var(--color-green-6);
  --color-primary-7: var(--color-green-7);
  
  --color-secondary-1: var(--color-gray-1);
  --color-secondary-2: var(--color-gray-2);
  --color-secondary-3: var(--color-gray-3);
  --color-secondary-4: var(--color-gray-4);
  --color-secondary-5: var(--color-gray-5);
  --color-secondary-6: var(--color-gray-6);
  --color-secondary-7: var(--color-gray-7);

  --color-success-1: var(--color-blue-1);
  --color-success-2: var(--color-blue-2);
  --color-success-3: var(--color-blue-3);
  --color-success-4: var(--color-blue-4);
  --color-success-5: var(--color-blue-5);
  --color-success-6: var(--color-blue-6);
  --color-success-7: var(--color-blue-7);

  --color-danger-1: var(--color-red-1);
  --color-danger-2: var(--color-red-2);
  --color-danger-3: var(--color-red-3);
  --color-danger-4: var(--color-red-4);
  --color-danger-5: var(--color-red-5);
  --color-danger-6: var(--color-red-6);
  --color-danger-7: var(--color-red-7);

  --color-warning-1: var(--color-yellow-1);
  --color-warning-2: var(--color-yellow-2);
  --color-warning-3: var(--color-yellow-3);
  --color-warning-4: var(--color-yellow-4);
  --color-warning-5: var(--color-yellow-5);
  --color-warning-6: var(--color-yellow-6);
  --color-warning-7: var(--color-yellow-7);

  --color-info-1: var(--color-purple-1);
  --color-info-2: var(--color-purple-2);
  --color-info-3: var(--color-purple-3);
  --color-info-4: var(--color-purple-4);
  --color-info-5: var(--color-purple-5);
  --color-info-6: var(--color-purple-6);
  --color-info-7: var(--color-purple-7);
    
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: "DM Sans";
    font-weight: 600;
    color: var(--color-gray);
  }

  body {
    font-family: "DM Sans";
    font-weight: 600;
    color: var(--color-gray);
  }
`

export default GlobalStyles
