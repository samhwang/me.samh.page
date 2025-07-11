import * as commonStyles from '../resume/common.styles';
import useIconClass from './use-icon-class';

type LangIconProps = {
  name: string;
};

export default function LangIcon({ name }: LangIconProps) {
  const [currentIconClass, toggleColorIcon] = useIconClass(name);
  const onMouseHandler = () => toggleColorIcon();

  return (
    <li className={commonStyles.listInlineItem}>
      <i role="img" data-testid={`language-icon-${name}`} className={currentIconClass} onMouseEnter={onMouseHandler} onMouseLeave={onMouseHandler} />
    </li>
  );
}
