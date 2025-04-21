import { useFormik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import useAppStore from '../../store/useAppStore';
import { selectAddPost } from '../../store/selectors';
import initDB from '../../services/db';
import {
  NewPostErrorMessage,
  NewPostFormBtn,
  NewPostFormBtnContainer,
  NewPostFormContainer,
  NewPostFormInput,
  NewPostFormLabel,
  NewPostFormTextArea,
  NewPostFileInputContainer,
  NewPostFileInput,
  NewPostFileIcon,
} from './NewPostForm.styled';

const MAX_TITLE_LENGTH = 150;
const MAX_BODY_LENGTH = 1500;

const validationSchema = Yup.object({
  title: Yup.string()
    .max(MAX_TITLE_LENGTH, `Maximum ${MAX_TITLE_LENGTH} characters`)
    .required('Required field'),
  body: Yup.string()
    .max(MAX_BODY_LENGTH, `Maximum ${MAX_BODY_LENGTH} characters`)
    .required('Required field'),
  file: Yup.mixed().required('File is required'),
});

const NewPostForm = ({ closeModal }) => {
  const addPost = useAppStore(selectAddPost);

  const saveImage = async (file, id) => {
    const db = await initDB();
    const tx = db.transaction('images', 'readwrite');
    const store = tx.objectStore('images');

    await store.add({
      id,
      file,
    });

    await tx.done;
  };

  const formik = useFormik({
    initialValues: {
      title: '',
      body: '',
      file: null,
    },
    validationSchema,
    onSubmit: async values => {
      const post = {
        id: nanoid(),
        title: values.title,
        content: values.body,
        createdAt: Date.now(),
      };

      await saveImage(values.file, post.id);
      addPost(post);
      closeModal();
    },
  });

  const isFileSelected = formik.values.file;

  return (
    <NewPostFormContainer onSubmit={formik.handleSubmit}>
      <NewPostFormLabel htmlFor="title">
        Title
        <NewPostFormInput
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
          aria-describedby="title-error"
        />
        {formik.touched.title && formik.errors.title ? (
          <NewPostErrorMessage>{formik.errors.title}</NewPostErrorMessage>
        ) : null}
      </NewPostFormLabel>

      <NewPostFormLabel htmlFor="body">
        Content
        <NewPostFormTextArea
          id="body"
          name="body"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.body}
          aria-describedby="body-error"
        />
        {formik.touched.body && formik.errors.body ? (
          <NewPostErrorMessage id="body-error" className="error">
            {formik.errors.body}
          </NewPostErrorMessage>
        ) : null}
      </NewPostFormLabel>

      <NewPostFormLabel htmlFor="file">
        Image:
        <NewPostFileInputContainer load={isFileSelected}>
          <NewPostFileInput
            id="file"
            name="file"
            type="file"
            onChange={event => {
              const file = event.currentTarget.files[0];
              formik.setFieldValue('file', file);
            }}
            onBlur={formik.handleBlur}
            aria-describedby="file-error"
          />
          <span>{isFileSelected ? 'Image selected' : 'Choose image'}</span>
          <NewPostFileIcon />
        </NewPostFileInputContainer>
        {formik.touched.file && formik.errors.file ? (
          <NewPostErrorMessage id="file-error" className="error">
            {formik.errors.file}
          </NewPostErrorMessage>
        ) : null}
      </NewPostFormLabel>

      <NewPostFormBtnContainer>
        <NewPostFormBtn
          type="submit"
          disabled={
            !formik.values.title ||
            !formik.values.body ||
            !formik.values.file ||
            formik.isSubmitting ||
            !formik.isValid
          }
        >
          Submit
        </NewPostFormBtn>
        <NewPostFormBtn onClick={closeModal}>Close</NewPostFormBtn>
      </NewPostFormBtnContainer>
    </NewPostFormContainer>
  );
};

export default NewPostForm;
