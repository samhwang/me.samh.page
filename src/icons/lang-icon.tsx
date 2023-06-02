import useIconClass from './use-icon-class';

interface LangIconProps {
  name: string;
}

export default function LangIcon({ name }: LangIconProps) {
  const [currentIconClass, toggleColorIcon] = useIconClass(name);
  const onMouseHandler = () => toggleColorIcon();

  return (
    <li className='list-inline-item'>
      <i className={currentIconClass} onMouseEnter={onMouseHandler} onMouseLeave={onMouseHandler} />
    </li>
  );
}
