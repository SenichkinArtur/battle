export function random(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
};

export function getAttackSuccess(health, experience) {
    let success = 0.5 * (1 + health/100) * random(50 + experience, 100) / 100;
    return success;
};

export function getDamage(experience) {
    let damage = 0.05 + experience / 100;
    return damage;
}