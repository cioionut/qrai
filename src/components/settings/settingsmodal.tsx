"use client"

// local
import SetTheme from "./settheme";


interface Props {
  localeFromURL: string,
}

const SettingsModal = (props: Props) => {
  const { localeFromURL } = props;

  return (
    <>
      <input type="checkbox" id="settingsmodal" className="modal-toggle" />
      <label htmlFor="settingsmodal" className="modal cursor-pointer">
        <label className="modal-box relative">
          <h3 className="font-bold text-lg">Settings</h3>
          <SetTheme />
        </label>
      </label>
    </>
  );
};

export default SettingsModal;