import { Field, Formik, Form } from 'formik';

const initialValues = {
  title: '',
  content: '',
}

const PostsForm = ({ onSubmit }) => (
  <Formik
    initialValues={initialValues}
    onSubmit={(values) => onSubmit(values)}
  >
    <Form>
      <label>
        Title
          <Field name="title" type="text"></Field>
      </label>
      <label>
        Message
          <Field name="content" type="text"></Field>
      </label>
      <button type="submit">Submit</button>
    </Form>
  </Formik>
);

export default PostsForm;