import cx from 'classnames';
import { JSX } from 'react';
import { Input, InputProps } from '../../../../shared/ui/';
import styles from './styles.module.scss';

interface FilterInputProps extends InputProps {
  className?: string;
}

export function FilterInput(props: FilterInputProps): JSX.Element {
  return <Input className={cx(styles.input)} type={'search'} placeholder="Search..." icon="search" {...props} />;
}
