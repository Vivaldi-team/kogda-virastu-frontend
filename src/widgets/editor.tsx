import React from 'react';
import styled from 'styled-components';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useIntl } from 'react-intl';
import { useSelector, useDispatch } from '../services/hooks';
import { setBody } from '../store';
import { LabelStyle } from '../ui-lib/inputs/text-fields-styles';
import { ContainerTextArea } from '../ui-lib/inputs/textarea-field-config';

const ReactQuillContainer = styled.div`
  && .ql-editor {
    min-height: 300px
  }
`;

const modules = {
  toolbar: {
    container: '#toolbar',
  },
  history: {
    delay: 500,
    maxStack: 100,
    userOnly: true,
  },
};

const formats = [
  'bold',
  'italic',
  'underline',
  'blockquote',
  'list',
  'link',
  'code-block',
];

const EditorToolbar = () => (
  <div id='toolbar'>
    <span className='ql-formats'>
      <button className='ql-bold' type='button' />
      <button className='ql-italic' type='button' />
      <button className='ql-underline' type='button' />
    </span>
    <span className='ql-formats'>
      <button type='button' className='ql-list' value='ordered' />
      <button type='button' className='ql-list' value='bullet' />
    </span>
    <span className='ql-formats'>
      <button type='button' className='ql-blockquote' />
      <button type='button' className='ql-link' />
      <button type='button' className='ql-code-block' />
      <button type='button' className='ql-clean' />
    </span>
  </div>
);

const Editor = () => {
  const dispatch = useDispatch();
  const { body } = useSelector((state) => state.forms.article) ?? {};
  const initialArticle = useSelector((state) => state.view.article);
  const handleChange = (value: string) => {
    dispatch(setBody(value));
  };
  const intl = useIntl();

  return (
    <ContainerTextArea>
      <LabelStyle>{intl.messages.articleText as string}</LabelStyle>
      <ReactQuillContainer>
        <EditorToolbar />
        <ReactQuill
          theme='snow'
          value={body === '' ? '' : body || initialArticle?.body || ''}
          onChange={handleChange}
          placeholder='Write something awesome...'
          preserveWhitespace
          modules={modules}
          formats={formats} />
      </ReactQuillContainer>
    </ContainerTextArea>
  );
};

export default Editor;
