function normalizeId(id)
{
    const normalizedId = Number(id);

    if (!Number.isInteger(normalizedId) || normalizedId <= 0) {

        return null;
    }
    return normalizedId;
}

module.exports = normalizeId;