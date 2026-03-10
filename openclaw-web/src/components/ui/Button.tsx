import type { AnchorHTMLAttributes, ButtonHTMLAttributes, PropsWithChildren } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';

type SharedProps = PropsWithChildren<{
  className?: string;
  variant?: Variant;
}>;

type ButtonVariantProps = SharedProps & ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined;
};

type LinkVariantProps = SharedProps & AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

type Props = ButtonVariantProps | LinkVariantProps;

const variantClasses: Record<Variant, string> = {
  primary: 'bg-primary-600 text-white shadow-lg shadow-primary-900/20 hover:bg-primary-700',
  secondary: 'border border-white/20 bg-white text-slate-950 hover:bg-primary-50',
  ghost: 'border border-slate-200 bg-transparent text-slate-900 hover:border-primary-200 hover:text-primary-600',
};

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-primary-500/40';

export default function Button(props: Props) {
  const { children, className = '', variant = 'primary' } = props;
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`.trim();

  if ('href' in props && props.href) {
    const { href, ...anchorProps } = props;
    return (
      <a {...anchorProps} href={href} className={classes}>
        {children}
      </a>
    );
  }

  const buttonProps = props as ButtonVariantProps;
  const { type = 'button', ...restButtonProps } = buttonProps;

  return (
    <button {...restButtonProps} type={type} className={classes}>
      {children}
    </button>
  );
}
