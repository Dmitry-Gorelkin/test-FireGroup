import { Formik } from 'formik';
import * as Yup from 'yup';

const MAX_TITLE_LENGTH = 100;
const MAX_BODY_LENGTH = 1000;
const MAX_IMAGE_SIZE = 1000 * 1024; // 500KB

const validationSchema = Yup.object({
  title: Yup.string()
    .max(MAX_TITLE_LENGTH, `Максимум ${MAX_TITLE_LENGTH} символов`)
    .required('Обязательное поле'),
  body: Yup.string()
    .max(MAX_BODY_LENGTH, `Максимум ${MAX_BODY_LENGTH} символов`)
    .required('Обязательное поле'),
  image: Yup.mixed()
    .required('Файл обязателен')
    .test('fileSize', 'Файл должен быть меньше 1000KB', value => {
      return value && value.size <= MAX_IMAGE_SIZE;
    }),
});

const NewPostForm = ({ closeModal }) => {
  return (
    <Formik
      initialValues={{
        title: '',
        body: '',
        image: null,
      }}
      validationSchema={validationSchema}
      onSubmit={values => {
        closeModal();
        console.log(values);
      }}
    >
      {formik => (
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label>Название поста:</label>
            <input
              type="text"
              name="title"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.title}
            />
            {formik.touched.title && formik.errors.title ? (
              <div style={{ color: 'red' }}>{formik.errors.title}</div>
            ) : null}
          </div>

          <div>
            <label>Текст статьи:</label>
            <textarea
              name="body"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.body}
            />
            {formik.touched.body && formik.errors.body ? (
              <div style={{ color: 'red' }}>{formik.errors.body}</div>
            ) : null}
          </div>

          <div>
            <label>Изображение:</label>
            <input
              type="file"
              name="image"
              onChange={event => {
                const file = event.currentTarget.files[0];
                formik.setFieldValue('image', file);
              }}
              onBlur={formik.handleBlur}
            />
            {formik.touched.image && formik.errors.image ? (
              <div style={{ color: 'red' }}>{formik.errors.image}</div>
            ) : null}
          </div>

          <button type="submit">Отправить</button>
        </form>
      )}
    </Formik>
  );
};

export default NewPostForm;
