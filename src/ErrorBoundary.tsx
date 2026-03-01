import { Component, type ReactNode } from 'react';

type Props = { children: ReactNode };
type State = { hasError: boolean; error: Error | null };

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError && this.state.error) {
      return (
        <div style={{
          padding: 24,
          fontFamily: 'system-ui',
          maxWidth: 600,
          margin: '40px auto',
          background: '#fef2f2',
          border: '1px solid #fecaca',
          borderRadius: 12,
        }}>
          <h2 style={{ color: '#b91c1c', marginBottom: 8 }}>页面加载出错</h2>
          <pre style={{
            overflow: 'auto',
            fontSize: 13,
            color: '#991b1b',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
          }}>
            {this.state.error.message}
          </pre>
          <p style={{ color: '#6b7280', fontSize: 14, marginTop: 12 }}>
            请按 F12 打开开发者工具，在 Console 面板查看完整错误堆栈。
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}
