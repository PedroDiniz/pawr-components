import React, { ReactElement } from 'react';

import './_globalStyle.scss';

const GlobalStyle = ({ children }: { children: ReactElement }) => <main>{children}</main>;

export default GlobalStyle;
