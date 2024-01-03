declare global {
  namespace JSX {
    interface IntrinsicElements {
      "lux-data-grid": React.DetailedHTMLProps<
        {target:string},
        HTMLElement
      >;
    }
  }
}

export default global;