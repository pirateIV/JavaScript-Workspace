// The Battery Status API, more often referred to as the Battery API, provides information about the system's battery charge level and lets you be notified by events that are sent when the battery level or charging status change. This can be used to adjust your app's resource usage to reduce battery drain when the battery is low, or to save changes before the battery runs out in order to prevent data loss.

console.log(navigator.getBattery());

navigator.getBattery().then((battery) => {
  function updateBatteryInfo() {
    updateLevelInfo();
    updateChargeInfo();
    // updateChargingInfo()
    // updateDischargingInfo()
  }

  updateBatteryInfo();

  battery.addEventListener("chargingchange", () => {
    updateChargeInfo();
  });

  function updateChargeInfo() {
    // console.log(`Battery Charging? ${battery.charging ? "Yes" : "No"}` )
    charging.innerHTML = `Battery Charging? ${battery.charging}`;
  }

  if (battery.charging === false) {
    let disTime = battery.dischargingTime
    ;
    // Convert seconds to a human-readable format (hours, minutes, seconds)

    const hours = Math.floor(disTime / 3600);
    const mins = Math.floor(disTime / 3600 / 60);
    var secs = disTime % 60;

    discharging.innerHTML = `${hours}hr : ${mins}min : ${secs}s`
  }

  battery.addEventListener("levelchange", () => {
    updateLevelInfo();
  });

  function updateLevelInfo() {
    level.innerHTML = `Battery Level:, ${battery.level * 100}%`;
  }
});
