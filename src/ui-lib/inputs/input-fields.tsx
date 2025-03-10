import React, { FC, useState } from 'react';
import { useIntl } from 'react-intl';
import InputField from './input-field-config';
import { PaperClipIcon, EyeIcon, EyeNoIcon } from '../icons';
import { TFieldInput } from '../../types/styles.types';

export const FieldUrl: FC<TFieldInput> = ({
  onFocus = undefined,
  onBlur = undefined,
  onChange,
  placeholder = '',
  error = false,
  errorText = '',
  disabled = false,
}) => {
  const intl = useIntl();
  return (
    <InputField
      placeholder={placeholder}
      name='FieldURL'
      type='file'
      errorText={errorText}
      error={error}
      onFocus={onFocus}
      onBlur={onBlur}
      onChange={onChange}
      labelText={intl.messages.articleImage as string}
      icon={<PaperClipIcon color='grey' />}
      disabled={disabled}
      accept='image/*' />
  );
};
export const FieldProfileImage: FC<TFieldInput> = ({
  onFocus = undefined,
  onBlur = undefined,
  onChange,
  placeholder = '',
  error = false,
  errorText = '',
  disabled = false,
}) => {
  const intl = useIntl();
  return (
    <InputField
      placeholder={placeholder}
      name='FieldProfileImage'
      type='file'
      errorText={errorText}
      error={error}
      onBlur={onBlur}
      onFocus={onFocus}
      onChange={onChange}
      labelText={intl.messages.profileImage as string}
      icon={<PaperClipIcon color='grey' />}
      disabled={disabled}
      accept='image/*' />
  );
};

export const FieldLogin: FC<TFieldInput> = ({
  value,
  onFocus = undefined,
  onBlur = undefined,
  onChange,
  placeholder = '',
  error = false,
  errorText = '',
  disabled = false,
}) => {
  const intl = useIntl();
  return (
    <InputField
      placeholder={placeholder}
      name='FieldLogin'
      type='text'
      errorText={errorText}
      error={error}
      onBlur={onBlur}
      onFocus={onFocus}
      value={value}
      onChange={onChange}
      labelText={intl.messages.userName as string}
      disabled={disabled} />
  );
};
export const FieldNick: FC<TFieldInput> = ({
  value,
  onFocus = undefined,
  onBlur = undefined,
  onChange,
  placeholder = '',
  error = false,
  errorText = '',
  disabled = false,
}) => {
  const intl = useIntl();
  return (
    <InputField
      placeholder={placeholder}
      name='FieldNick'
      type='text'
      errorText={errorText}
      error={error}
      onBlur={onBlur}
      onFocus={onFocus}
      value={value}
      onChange={onChange}
      disabled={disabled}
      labelText={intl.messages.nickname as string} />
  );
};
export const FieldEmail: FC<TFieldInput> = ({
  value,
  onFocus = undefined,
  onBlur = undefined,
  onChange,
  placeholder = '',
  error = false,
  errorText = '',
  disabled = false,
}) => {
  const intl = useIntl();
  return (
    <InputField
      placeholder={placeholder}
      name='Email'
      type='email'
      errorText={errorText}
      error={error}
      onBlur={onBlur}
      onFocus={onFocus}
      value={value}
      onChange={onChange}
      disabled={disabled}
      labelText={intl.messages.userEmail as string} />
  );
};
export const FieldPassword: FC<TFieldInput & { label?: string, name?: string }> = ({
  name = 'FieldPassword',
  label = undefined,
  value,
  onFocus = undefined,
  onBlur = undefined,
  onChange,
  placeholder = '',
  error = false,
  errorText = '',
  disabled = false,
}) => {
  const intl = useIntl();
  const [passwordState,
    setPasswordState] = useState<'password' | 'text'>('password');
  const [passwordIcon, setPasswordIcon] = useState(<EyeNoIcon color='grey' />);
  const onIconClick = () => {
    if (passwordState === 'password') {
      setPasswordState('text');
      setPasswordIcon(<EyeIcon color='grey' />);
    } else {
      setPasswordState('password');
      setPasswordIcon(<EyeNoIcon color='grey' />);
    }
  };
  return (
    <InputField
      placeholder={placeholder}
      name={name}
      type={passwordState}
      errorText={errorText}
      error={error}
      onBlur={onBlur}
      onFocus={onFocus}
      disabled={disabled}
      value={value}
      onChange={onChange}
      labelText={label || intl.messages.password as string}
      icon={passwordIcon}
      onIconClick={onIconClick} />
  );
};

export const FieldInviteCode: FC<TFieldInput> = ({
  value,
  onFocus = undefined,
  onBlur = undefined,
  onChange,
  placeholder = '',
  error = false,
  errorText = '',
  disabled = false,
}) => {
  const intl = useIntl();
  return (
    <InputField
      placeholder={placeholder}
      name='InviteCode'
      type='text'
      errorText={errorText}
      error={error}
      onBlur={onBlur}
      onFocus={onFocus}
      value={value}
      onChange={onChange}
      disabled={disabled}
      labelText={intl.messages.invite as string} />
  );
};

FieldPassword.defaultProps = {
  label: undefined,
  name: 'FieldPassword',
};

export const FieldConfirmPassword: FC<TFieldInput & { label?: string, name?: string }> = ({
  name = 'FieldConfirmPassword',
  label = undefined,
  value,
  onFocus = undefined,
  onBlur = undefined,
  onChange,
  placeholder = '',
  error = false,
  errorText = '',
  disabled = false,
}) => {
  const intl = useIntl();
  const [passwordState,
    setPasswordState] = useState<'password' | 'text'>('password');
  const [passwordIcon, setPasswordIcon] = useState(<EyeNoIcon color='grey' />);
  const onIconClick = () => {
    if (passwordState === 'password') {
      setPasswordState('text');
      setPasswordIcon(<EyeIcon color='grey' />);
    } else {
      setPasswordState('password');
      setPasswordIcon(<EyeNoIcon color='grey' />);
    }
  };
  return (
    <InputField
      placeholder={placeholder}
      name={name}
      type={passwordState}
      errorText={errorText}
      error={error}
      onBlur={onBlur}
      onFocus={onFocus}
      disabled={disabled}
      value={value}
      onChange={onChange}
      labelText={label || intl.messages.confirmPassword as string}
      icon={passwordIcon}
      onIconClick={onIconClick} />
  );
};

FieldConfirmPassword.defaultProps = {
  label: undefined,
  name: 'FieldConfirmPassword',
};

export const FieldDescriptionArticle: FC<TFieldInput> = ({
  value,
  onFocus = undefined,
  onBlur = undefined,
  onChange,
  placeholder = '',
  error = false,
  errorText = '',
  disabled = false,
}) => {
  const intl = useIntl();
  return (
    <InputField
      placeholder={placeholder}
      name='descriptionArticle'
      type='text'
      errorText={errorText}
      error={error}
      onFocus={onFocus}
      onBlur={onBlur}
      value={value}
      disabled={disabled}
      onChange={onChange}
      labelText={intl.messages.articleAbout as string} />
  );
};
export const FieldNameArticle: FC<TFieldInput> = ({
  value,
  onFocus = undefined,
  onBlur = undefined,
  onChange,
  placeholder = '',
  error = false,
  errorText = '',
  disabled = false,
}) => {
  const intl = useIntl();
  return (
    <InputField
      placeholder={placeholder}
      name='nameArticle'
      type='text'
      errorText={errorText}
      error={error}
      onFocus={onFocus}
      onBlur={onBlur}
      value={value}
      onChange={onChange}
      disabled={disabled}
      labelText={intl.messages.articleName as string} />
  );
};
export const FieldTags: FC<TFieldInput> = ({
  value,
  onFocus = undefined,
  onBlur = undefined,
  onChange,
  placeholder = '',
  error = false,
  errorText = '',
  disabled = false,
}) => {
  const intl = useIntl();
  return (
    <InputField
      placeholder={placeholder}
      name='tags'
      type='text'
      errorText={errorText}
      error={error}
      onFocus={onFocus}
      onBlur={onBlur}
      value={value}
      onChange={onChange}
      disabled={disabled}
      labelText={intl.messages.tags as string} />
  );
};
