/*
 * Copyright 2024 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import clsx from 'clsx';
import { forwardRef, Ref } from 'react';
import { Link as RALink } from 'react-aria-components';
import type { ButtonLinkProps } from './types';
import { useStyles } from '../../hooks/useStyles';
import { ButtonDefinition } from '../Button/definition';
import { ButtonLinkDefinition } from './definition';
import { InternalLinkProvider } from '../InternalLinkProvider';
import stylesButton from '../Button/Button.module.css';

/** @public */
export const ButtonLink = forwardRef(
  (props: ButtonLinkProps, ref: Ref<HTMLAnchorElement>) => {
    const { classNames, dataAttributes, cleanedProps } = useStyles(
      ButtonDefinition,
      {
        size: 'small',
        variant: 'primary',
        ...props,
      },
    );

    const { classNames: classNamesButtonLink } =
      useStyles(ButtonLinkDefinition);

    const { children, className, iconStart, iconEnd, href, ...rest } =
      cleanedProps;

    return (
      <InternalLinkProvider href={href}>
        <RALink
          className={clsx(
            classNames.root,
            classNamesButtonLink.root,
            stylesButton[classNames.root],
            className,
          )}
          ref={ref}
          {...dataAttributes}
          href={href}
          {...rest}
        >
          <span
            className={clsx(
              classNames.content,
              stylesButton[classNames.content],
            )}
          >
            {iconStart}
            {children}
            {iconEnd}
          </span>
        </RALink>
      </InternalLinkProvider>
    );
  },
);

ButtonLink.displayName = 'ButtonLink';
