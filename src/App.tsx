import { ChangeEvent, useState } from 'react';
import { PlayerDetails } from '@wise-old-man/utils';
import { ToastContainer } from 'react-toastify';
import './App.css';
import { Compare, Skill, Boss, Activity, SkillsHeader, BossHeader, ActivityHeader } from './components';
import sendToast from './utils/toast';
import { OSRSDetails, ToastType, SelectedType } from './types';
import { fetchWOMDetails } from './services/wiseoldman';
import { fetchOSRSDetails } from './services/osrs';
import { NameMap } from './utils/mappings';

interface NameSearch {
  oldName: string;
  newName: string;
}

const TESTING = false;

function App() {
  const [player, setPlayer] = useState<NameSearch>({ oldName: '', newName: '' });
  const [womPlayerDetails, setWomPlayerDetails] = useState<PlayerDetails>();
  const [osrsPlayerDetails, setOsrsPlayerDetails] = useState<OSRSDetails>();
  const [selected, setSelected] = useState<SelectedType>(SelectedType.Skills);

  async function getPlayerDetils(): Promise<PlayerDetails | undefined> {
    if (!!!player.oldName) {
      sendToast('Old player name was left empty', ToastType.Error);
      return;
    }

    if (!!!player.newName) {
      sendToast('New player name was left empty', ToastType.Error);
      return;
    }

    const womResult = await fetchWOMDetails(player.oldName);
    if (typeof womResult === 'string') {
      sendToast(womResult, ToastType.Error);
      return;
    }
    setWomPlayerDetails(womResult);

    const osrsResult = await fetchOSRSDetails(player.newName, womResult.type);
    if (typeof osrsResult === 'string') {
      sendToast(osrsResult, ToastType.Error);
      return;
    }
    setOsrsPlayerDetails(osrsResult);
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.currentTarget.value;
    const name = e.currentTarget.name;

    setPlayer({
      ...player,
      [name]: value
    });
  }

  return (
    <div className="app">
      {
        <div className="wrapper">
          <ToastContainer style={{ fontSize: '.8em' }} />

          <Compare
            oldName={player.oldName}
            newName={player.newName}
            handleCompare={getPlayerDetils}
            handleChange={handleChange}
          />
          {TESTING && (
            <b>
              <p style={{ position: 'fixed', top: 0, left: 0, color: 'red' }}>TESTING</p>
            </b>
          )}
          <div className="tables">
            {womPlayerDetails && osrsPlayerDetails && (
              <>
                <select
                  id="selection"
                  value={selected}
                  onChange={e => {
                    setSelected(e.currentTarget.value as SelectedType);
                  }}
                >
                  <option value={SelectedType.Skills}>Skills</option>
                  <option value={SelectedType.Bosses}>Bosses</option>
                  <option value={SelectedType.Activities}>Activities</option>
                </select>
                {selected === SelectedType.Skills && (
                  <table className="table">
                    <SkillsHeader />
                    <tbody>
                      {Object.entries(womPlayerDetails.latestSnapshot.data.skills).map(e => {
                        const [skill, value] = e;
                        return (
                          <Skill
                            skill={skill}
                            wom={value}
                            osrs={osrsPlayerDetails.skills.find(s => s.name === NameMap[skill])!}
                            key={skill}
                          />
                        );
                      })}
                    </tbody>
                  </table>
                )}
                {selected === SelectedType.Bosses && (
                  <table className="table">
                    <BossHeader />
                    <tbody>
                      {Object.entries(womPlayerDetails.latestSnapshot.data.bosses).map(e => {
                        const [boss, value] = e;
                        return (
                          <Boss
                            boss={boss}
                            wom={value}
                            osrs={osrsPlayerDetails.activities.find(s => s.name === NameMap[boss])!}
                            key={boss}
                          />
                        );
                      })}
                    </tbody>
                  </table>
                )}
                {selected === SelectedType.Activities && (
                  <table className="table">
                    <ActivityHeader />
                    <tbody>
                      {Object.entries(womPlayerDetails.latestSnapshot.data.activities).map(e => {
                        const [activity, value] = e;
                        return (
                          <Activity
                            activity={activity}
                            wom={value}
                            osrs={osrsPlayerDetails.activities.find(s => s.name === NameMap[activity])!}
                            key={activity}
                          />
                        );
                      })}
                    </tbody>
                  </table>
                )}
              </>
            )}
          </div>
        </div>
      }
    </div>
  );
}

export default App;
