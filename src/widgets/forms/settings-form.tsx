import React, {
  ChangeEventHandler,
  FC,
  FormEventHandler,
  MouseEvent,
  useEffect,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { FormattedMessage, useIntl } from 'react-intl';
import { useDispatch, useSelector } from '../../services/hooks';

import {
  setUsernameProfile,
  setEmailProfile,
  setBioProfile,
  setNicknameProfile,
  setFormProfile,
  setPasswordProfile,
  ConfirmPasswordProfile,
  copyGeneratedInviteCode,
} from '../../store';

import {
  patchCurrentUserThunk,
  getInviteCodeThunk,
  uploadImageThunk,
} from '../../thunks';

import {
  ButtonContainer, ContainerInvite,
  Form,
  FormContainer,
  FormTitle,
  InputFieldset,
  LinkStyle, MessageCopySuccess,
} from './forms-styles';

import {
  FieldEmail,
  FieldLogin,
  FieldNick,
  FieldPassword,
  FieldConfirmPassword,
  FieldProfileImage,
  UpdateProfileButton,
  FieldAboutUser,
  GenerateInviteCodeButton,
} from '../../ui-lib';

import FollowTags from '../follow-tags';
import { greySecondary } from '../../constants/colors';

const SettingsForm: FC = () => {
  const {
    bio, email, username, password, nickname, confirmpassword,
  } = useSelector((state) => state.forms.profile);

  const profile = useSelector((state) => state.profile);

  const { isSettingsPatching, isSettingsUpdateSucceeded } = useSelector((state) => state.api);

  const { generatedCode, copyGeneratedCode } = useSelector((state) => state.view);

  const dispatch = useDispatch();
  const theme = useTheme();
  const navigate = useNavigate();
  const intl = useIntl();

  useEffect(() => {
    dispatch(setFormProfile({
      username: profile.username || '',
      email: profile.email || '',
      nickname: profile.nickname || '',
      bio: profile.bio || '',
      image: profile.image || '',
    }));
  }, [dispatch, profile]);

  useEffect(() => {
    if (isSettingsUpdateSucceeded) {
      navigate('/');
    }
  //  return () => { dispatch(settingsResetUpdateSucceeded()); };
  }, [isSettingsUpdateSucceeded, navigate]);

  const submitForm : FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    if (password === confirmpassword
      || ((password === '' || password === null) && (confirmpassword === '' || confirmpassword === null))) {
      dispatch(patchCurrentUserThunk());
    }
  };

  const changeImage : ChangeEventHandler<HTMLInputElement> = (evt) => {
    if (evt.target.files) {
      const formData = new FormData();
      formData.append('file', evt.target.files[0]);
      dispatch(uploadImageThunk(formData, 'profile'));
    }
  };

  const changeUsername : ChangeEventHandler<HTMLInputElement> = (evt) => {
    dispatch(setUsernameProfile(evt.target.value));
  };

  const changeBioProfile : ChangeEventHandler<HTMLTextAreaElement> = (evt) => {
    dispatch(setBioProfile(evt.target.value));
  };

  const changeEmail : ChangeEventHandler<HTMLInputElement> = (evt) => {
    dispatch(setEmailProfile(evt.target.value));
  };
  const changeNickname : ChangeEventHandler<HTMLInputElement> = (evt) => {
    dispatch(setNicknameProfile(evt.target.value));
  };
  const ConfirmChangePassword : ChangeEventHandler<HTMLInputElement> = (evt) => {
    dispatch(ConfirmPasswordProfile(evt.target.value));
  };
  const changePassword : ChangeEventHandler<HTMLInputElement> = (evt) => {
    dispatch(setPasswordProfile(evt.target.value));
  };
  const copyToClipBoard = (e: MouseEvent<HTMLElement>, text: string) => {
    e.preventDefault();
    navigator.clipboard.writeText(text)
      .then(() => setTimeout(() => dispatch(copyGeneratedInviteCode()), 2000))
      .finally(() => dispatch(copyGeneratedInviteCode()))
      .catch((evt: string) => evt);
  };

  return (
    <FormContainer>
      <FormTitle>
        <FormattedMessage id='usersettings' />
      </FormTitle>
      <Form onSubmit={submitForm}>
        <InputFieldset rowGap={16}>
          <FieldProfileImage onChange={changeImage} />
          <FieldLogin value={username ?? ''} onChange={changeUsername} />
          <FieldNick value={nickname ?? ''} onChange={changeNickname} />
          <FieldAboutUser
            onChange={changeBioProfile}
            value={bio ?? ''}
            minHeight={theme.text18.height * 5} />
          <FieldEmail value={email ?? ''} onChange={changeEmail} />
          <FieldPassword label={intl.messages.newPassword as string} value={password ?? ''} onChange={changePassword} />
          <FieldConfirmPassword value={confirmpassword ?? ''} onChange={ConfirmChangePassword} />
        </InputFieldset>
        <ContainerInvite>
          <GenerateInviteCodeButton onClick={() => dispatch(getInviteCodeThunk())} />
          {generatedCode ? (
            <>
              {copyGeneratedCode
                ? (
                  <MessageCopySuccess>
                    <FormattedMessage id='copyTextSuccess' />
                  </MessageCopySuccess>
                )
                : null}
              <LinkStyle
                onClick={(e: MouseEvent<HTMLElement>) => copyToClipBoard(e, `${window.location.origin}/registration?=${generatedCode}`)}
                to={`/registration?=${generatedCode}`}
                color={greySecondary}>
                <FormattedMessage id='copyText' />
              </LinkStyle>
            </>
          )
            : null}
        </ContainerInvite>
        <FollowTags />
        <ButtonContainer>
          <UpdateProfileButton disabled={isSettingsPatching} />
        </ButtonContainer>
      </Form>
    </FormContainer>
  );
};

export default SettingsForm;
