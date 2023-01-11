import { ErrorFallbackProps } from "../../models/PropsModels";

export default function ErrorFallback({error}: ErrorFallbackProps) {
    return (
        <div role="alert">
          <p>Something went wrong:</p>
          <pre style={{color: 'red'}}>{error.message}</pre>
        </div>
      )
}
