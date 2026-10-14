import '../scss/SectionTitle.scss';

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  light?: boolean;
};

export default function SectionTitle({ title, subtitle, light = false }: SectionTitleProps) {
  return (
    <div className={`section-title${light ? ' section-title--light' : ''}`}>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}
