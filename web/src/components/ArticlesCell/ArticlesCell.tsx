import type {ArticlesQuery} from 'types/graphql'
import type {CellSuccessProps, CellFailureProps} from '@redwoodjs/web'
import Card from "src/components/Card/Card";


export const QUERY = gql`
  query ArticlesQuery {
    articles:posts {
      id,
      title,
      content
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({error}: CellFailureProps) => (
  <div style={{color: 'red'}}>Error: {error.message}</div>
)

export const Success = ({articles}: CellSuccessProps<ArticlesQuery>) => {
  return (
    <ul>
      {articles.map((item) => {
        return <Card key={item.id} title={item.title} id={item.id} content={item.content}/>
      })}
    </ul>
  )
}
