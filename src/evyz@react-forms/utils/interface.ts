export interface WidgetBaseParams {
  className?: string;
  label?: string;
  widgetId: string;
  isLoading: boolean;
  children: React.ReactChild;
  styles: React.CSSProperties;
}
